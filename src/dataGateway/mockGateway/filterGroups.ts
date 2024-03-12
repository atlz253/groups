import Group, { AvatarColor, User } from "../../groups/Group";
import {
  GroupsAvatarColorFilterValues,
  GroupsFilters,
  GroupsFriendsFilter,
  GroupsPrivacyFilterValues,
} from "../../groups/GroupsFilters";
import groups from "./groups";

function filterGroups(params: GroupsFilters): Group[] {
  const { privacyFilter, avatarColorFilter, friendsFilter } = params;

  return groups.filter(
    (group) =>
      isRequiredFriendsFilter(friendsFilter, group.friends) &&
      isRequiredGroupPrivacy(privacyFilter, group.closed) &&
      isRequiredAvatarColor(avatarColorFilter, group.avatar_color)
  );
}

function isRequiredFriendsFilter(
  requiredFriendsFilter: GroupsFriendsFilter,
  friendsInGroup: User[] | undefined
) {
  return (
    requiredFriendsFilter === "all" ||
    (requiredFriendsFilter === "present" &&
      friendsInGroup !== undefined &&
      friendsInGroup.length > 0) ||
    (requiredFriendsFilter === "missing" &&
      (friendsInGroup === undefined || friendsInGroup.length === 0))
  );
}

function isRequiredGroupPrivacy(
  requiredPrivacy: GroupsPrivacyFilterValues,
  isPrivateGroup: boolean
) {
  return (
    requiredPrivacy === "all" ||
    (requiredPrivacy === "private" && isPrivateGroup) ||
    (requiredPrivacy === "public" && !isPrivateGroup)
  );
}

function isRequiredAvatarColor(
  requiredAvatarColor: GroupsAvatarColorFilterValues,
  groupsAvatarColor: AvatarColor | undefined
) {
  return (
    requiredAvatarColor === "all" || requiredAvatarColor === groupsAvatarColor
  );
}

export default filterGroups;
