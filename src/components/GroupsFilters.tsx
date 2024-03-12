import { ChangeEvent } from "react";
import { useGroupsPrivacyFilter } from "../hooks/groups";
import { GroupsPrivacyFilterValues } from "../groups/GroupsFilters";

const SELECT_PRIVACY_TYPE_LABEL = "Выберите тип приватности";
const PRIVATE_GROUPS_LABEL = "Приватные группы";
const PUBLIC_GROUPS_LABEL = "Публичные группы";

function GroupsFilters() {
  return (
    <div>
      <GroupsPrivacySelect />
    </div>
  );
}

function GroupsPrivacySelect() {
  const { groupsPrivacyFilter, setGroupsPrivacyFilter } =
    useGroupsPrivacyFilter();

  return (
    <select value={groupsPrivacyFilter} onChange={setFilter}>
      <option value="all">{SELECT_PRIVACY_TYPE_LABEL}</option>
      <option value="public">{PUBLIC_GROUPS_LABEL}</option>
      <option value="private">{PRIVATE_GROUPS_LABEL}</option>
    </select>
  );

  function setFilter(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as GroupsPrivacyFilterValues;

    setGroupsPrivacyFilter(value);
  }
}

export default GroupsFilters;
