import { AvatarColor } from "./Group";

export type GroupsFilters = {
  privacyFilter: GroupsPrivacyFilterValues;
  avatarColorFilter: GroupsAvatarColorFilterValues;
};

export type GroupsPrivacyFilterValues = "all" | "public" | "private";
export type GroupsAvatarColorFilterValues = "all" | AvatarColor;
