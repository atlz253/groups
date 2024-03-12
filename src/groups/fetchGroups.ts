import GatewayResponse from "../dataGateway/abstractGateway/GatewayResponse";
import dataGateway from "../dataGateway/dataGateway";
import Group from "./Group";
import { GroupsFilters } from "./GroupsFilters";

const FETCH_ERROR_MESSAGE =
  "Не удалось получить данные, попробуйте перезагрузить страницу";

async function fetchGroups(
  setGroups: (groups: Group[]) => void,
  params?: GroupsFilters
) {
  try {
    const groups = await getGroupsAndRetryIfErrors(params);

    setGroups(groups.data);
  } catch (error) {
    alert(error);
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
