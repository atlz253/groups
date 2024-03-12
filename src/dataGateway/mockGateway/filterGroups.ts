import Group, { AvatarColor } from "../../groups/Group";
import {
  GroupsAvatarColorFilterValues,
  GroupsFilters,
  GroupsPrivacyFilterValues,
} from "../../groups/GroupsFilters";
import groups from "./groups";

function filterGroups(params: GroupsFilters): Group[] {
  const { privacyFilter, avatarColorFilter } = params;

  return groups.filter(
    (group) =>
      isRequiredGroupPrivacy(privacyFilter, group.closed) &&
      isRequiredAvatarColor(avatarColorFilter, group.avatar_color)
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
