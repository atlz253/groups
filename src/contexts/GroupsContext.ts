import { Dispatch, createContext } from "react";
import Group from "../groups/Group";
import {
  GroupsAvatarColorFilterValues,
  GroupsFilters,
  GroupsPrivacyFilterValues,
} from "../groups/GroupsFilters";

type GroupsContextData = {
  store: GroupsContextState;
  dispatch: Dispatch<GroupsAction>;
};

type GroupsContextState = {
  groups: Group[];
  filters: GroupsFilters;
};

export type GroupsAction =
  | {
      type: "SET_GROUPS";
      payload: Group[];
    }
  | {
      type: "SET_PRIVACY_FILTER";
      payload: GroupsPrivacyFilterValues;
    }
  | {
      type: "SET_AVATAR_COLOR_FILTER";
      payload: GroupsAvatarColorFilterValues;
    };

export const groupsActions = {
  setGroups: "SET_GROUPS",
  setPrivacyFilter: "SET_PRIVACY_FILTER",
  setAvatarColorFilter: "SET_AVATAR_COLOR_FILTER",
} as const;

const defaultGroupsContextValue: GroupsContextData = {
  store: {
    groups: [],
    filters: {
      privacyFilter: "all",
      avatarColorFilter: "all",
    },
  },
  dispatch: () => undefined,
};

const GroupsContext = createContext(defaultGroupsContextValue);

function groupsContextReducer(
  state: GroupsContextState,
  action: GroupsAction
): GroupsContextState {
  const { type, payload } = action;

  switch (type) {
    case groupsActions.setGroups:
      return { ...state, groups: payload };
    case groupsActions.setPrivacyFilter:
      return {
        ...state,
        filters: { ...state.filters, privacyFilter: payload },
      };
    case groupsActions.setAvatarColorFilter:
      return {
        ...state,
        filters: { ...state.filters, avatarColorFilter: payload },
      };
    default:
      return state;
  }
}

export default {
  defaultGroupsContextValue,
  groupsContextReducer,
  GroupsContext,
} as const;
