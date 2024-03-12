import dataGateway from "../dataGateway/dataGateway";
import Group from "./Group";
import { GroupsFilters } from "./GroupsFilters";

async function fetchGroups(
  setGroups: (groups: Group[]) => void,
  params?: GroupsFilters
) {
  const groups = await dataGateway.getGroups(params);

  setGroups(groups.data || []); // TODO: обработка пустого data
}

export default fetchGroups;
