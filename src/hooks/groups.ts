import { Dispatch, useContext, useEffect, useReducer } from "react";
import {
  GroupsAction,
  groupsActions,
  default as groupsContext,
} from "../contexts/GroupsContext";
import {
  GroupsFilters,
  GroupsPrivacyFilterValues,
} from "../groups/GroupsFilters";
import fetchGroups from "../groups/fetchGroups";
import Group from "../groups/Group";

export function useGroups() {
  const { store } = useGroupsContext();
  const { groups } = store;

  return { groups };
}

export function useGroupsPrivacyFilter() {
  const { store, dispatch } = useGroupsContext();
  const { filters } = store;
  const { privacyFilter: groupsPrivacyFilter } = filters;
  const setGroupsPrivacyFilter = (privacyFilter: GroupsPrivacyFilterValues) => {
    updateGroups(dispatch, { ...filters, privacyFilter });
    dispatch({ type: groupsActions.setPrivacyFilter, payload: privacyFilter });
  };

  return { groupsPrivacyFilter, setGroupsPrivacyFilter };
}

export function useGroupsReducer() {
  const { groupsContextReducer, defaultGroupsContextValue } = groupsContext;
  const [store, dispatch] = useReducer(
    groupsContextReducer,
    defaultGroupsContextValue.store
  );

  useEffect(() => updateGroups(dispatch), []);

  return { store, dispatch };
}

export function updateGroups(
  dispatch: Dispatch<GroupsAction>,
  params?: Partial<GroupsFilters>
) {
  fetchGroups(getGroupsSetFunction(dispatch), params);
}

function getGroupsSetFunction(dispatch: Dispatch<GroupsAction>) {
  return (groups: Group[]) =>
    dispatch({ type: groupsActions.setGroups, payload: groups });
}

function useGroupsContext() {
  const { GroupsContext } = groupsContext;
  return useContext(GroupsContext);
}
