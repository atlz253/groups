import { CSSProperties, ChangeEvent } from "react";
import { useGroupsAvatarColorFilter } from "../../hooks/groups";
import { GroupsAvatarColorFilterValues } from "../../groups/GroupsFilters";

const avatarColorOptions: ReadonlyArray<
  [GroupsAvatarColorFilterValues, string]
> = [
  ["all", "Выберите цвет аватарки"],
  ["red", "Красный"],
  ["green", "Зеленый"],
  ["yellow", "Желтый"],
  ["purple", "Фиолетовый"],
  ["blue", "Синий"],
  ["orange", "Оранжевый"],
  ["white", "Белый"],
];

function GroupsAvatarColorSelect({ style }: { style?: CSSProperties }) {
  const { avatarColorFilter, setAvatarColorFilter } =
    useGroupsAvatarColorFilter();

  return (
    <select style={style} value={avatarColorFilter} onChange={setSelection}>
      {avatarColorOptions.map(([color, label]) => (
        <option key={color} value={color}>
          {label}
        </option>
      ))}
    </select>
  );

  function setSelection(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as GroupsAvatarColorFilterValues;
    setAvatarColorFilter(value);
  }
}

export default GroupsAvatarColorSelect;
