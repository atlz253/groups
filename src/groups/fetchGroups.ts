import GatewayResponse from "../dataGateway/abstractGateway/GatewayResponse";
import dataGateway from "../dataGateway/dataGateway";
import Cache from "../utils/cache";
import Group from "./Group";
import { GroupsFilters } from "./GroupsFilters";

const FETCH_ERROR_MESSAGE =
  "Не удалось получить данные, попробуйте перезагрузить страницу";

const fetchGroupsCache = new Cache<Group[]>(60000);

async function fetchGroups(
  setGroups: (groups: Group[]) => void,
  params: GroupsFilters
) {
  const cache = fetchGroupsCache.get(JSON.stringify(params));

  if (cache !== undefined) {
    setGroups(cache);
  } else {
    try {
      const groups = await getGroupsAndRetryIfErrors(params);

      fetchGroupsCache.set(JSON.stringify(params), groups.data);

      setGroups(groups.data);
    } catch (error) {
      alert(error);
    }
  }
}

type RequiredGatewayGroupResponse = Partial<GatewayResponse<Group[]>> &
  Required<Pick<GatewayResponse<Group[]>, "data">>;

async function getGroupsAndRetryIfErrors(
  params?: GroupsFilters,
  retries: number = 3
) {
  const tryToGet = async (): Promise<RequiredGatewayGroupResponse> => {
    retries--;

    const groups = await dataGateway.getGroups(params);

    if (groups.result === 0 || groups.data === undefined) {
      if (retries === 0) {
        throw new Error(FETCH_ERROR_MESSAGE);
      }

      return await tryToGet();
    } else {
      return groups as RequiredGatewayGroupResponse;
    }
  };

  return tryToGet();
}

export default fetchGroups;
