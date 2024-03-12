import { Dispatch, useContext, useEffect, useReducer } from "react";
import {
  GroupsAction,
  groupsActions,
  default as groupsContext,
} from "../contexts/GroupsContext";
import {
  GroupsAvatarColorFilterValues,
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
  const { filters, dispatch } = useGroupsFilters();
  const { privacyFilter: groupsPrivacyFilter } = filters;
  const setGroupsPrivacyFilter = (privacyFilter: GroupsPrivacyFilterValues) => {
    updateGroups(dispatch, { ...filters, privacyFilter });
    dispatch({ type: groupsActions.setPrivacyFilter, payload: privacyFilter });
  };

  return { groupsPrivacyFilter, setGroupsPrivacyFilter };
}

export function useGroupsAvatarColorFilter() {
  const { filters, dispatch } = useGroupsFilters();
  const { avatarColorFilter } = filters;
  const setAvatarColorFilter = (
    avatarColorFilter: GroupsAvatarColorFilterValues
  ) => {
    updateGroups(dispatch, { ...filters, avatarColorFilter });
    dispatch({
      type: groupsActions.setAvatarColorFilter,
      payload: avatarColorFilter,
    });
  };
  return { avatarColorFilter, setAvatarColorFilter };
}

function useGroupsFilters() {
  const { store, dispatch } = useGroupsContext();
  const { filters } = store;
  return { filters, dispatch };
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
