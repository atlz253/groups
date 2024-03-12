import { AvatarColor } from "./Group";

export type GroupsFilters = {
  privacyFilter: GroupsPrivacyFilterValues;
  avatarColorFilter: GroupsAvatarColorFilterValues;
  friendsFilter: GroupsFriendsFilter;
};

export type GroupsPrivacyFilterValues = "all" | "public" | "private";
export type GroupsAvatarColorFilterValues = "all" | AvatarColor;
export type GroupsFriendsFilter = "all" | "present" | "missing";

export function getDefaultGroupsFilters(): GroupsFilters {
  return {
    privacyFilter: "all",
    avatarColorFilter: "all",
    friendsFilter: "all",
  };
}
