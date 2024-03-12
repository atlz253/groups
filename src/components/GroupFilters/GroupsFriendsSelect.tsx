import { CSSProperties, ChangeEvent } from "react";
import { useGroupsFriendFilter } from "../../hooks/groups";
import { GroupsFriendsFilter } from "../../groups/GroupsFilters";

const SELECT_FRIENDS_FILTER = "Выберите фильтр по наличию друзей";
const FRIENDS_PRESENT = "Друзья присутствуют";
const FRIENDS_MISSING = "Друзья отсутствуют";

function GroupsFriendsSelect({ style }: { style?: CSSProperties }) {
  const { friendsFilter, setFriendsFilter } = useGroupsFriendFilter();

  return (
    <select style={style} value={friendsFilter} onChange={setSelect}>
      <option value="all">{SELECT_FRIENDS_FILTER}</option>
      <option value="present">{FRIENDS_PRESENT}</option>
      <option value="missing">{FRIENDS_MISSING}</option>
    </select>
  );

  function setSelect(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as GroupsFriendsFilter;

    setFriendsFilter(value);
  }
}

export default GroupsFriendsSelect;
