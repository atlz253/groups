import Group from "../../groups/Group";
import {
  GroupsFilters,
  GroupsPrivacyFilterValues,
} from "../../groups/GroupsFilters";
import groups from "./groups";

function filterGroups(params: Partial<GroupsFilters>): Group[] {
  const { privacyFilter } = params;

  return groups.filter((group) =>
    isRequiredGroupPrivacy(privacyFilter, group.closed)
  );
}

function isRequiredGroupPrivacy(
  requiredPrivacy: GroupsPrivacyFilterValues | undefined,
  isPrivateGroup: boolean
) {
  return (
    requiredPrivacy === "all" ||
    requiredPrivacy === undefined ||
    (requiredPrivacy === "private" && isPrivateGroup) ||
    (requiredPrivacy === "public" && !isPrivateGroup)
  );
}

export default filterGroups;
