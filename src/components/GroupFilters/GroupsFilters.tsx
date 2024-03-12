import GroupsAvatarColorSelect from "./GroupsAvatarColorSelect";
import GroupsPrivacySelect from "./GroupsPrivacySelect";


function GroupsFilters() {
  return (
    <div>
      <GroupsPrivacySelect />
      <GroupsAvatarColorSelect style={{marginLeft: "5px"}} />
    </div>
  );
}

export default GroupsFilters;
