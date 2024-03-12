import GroupsAvatarColorSelect from "./GroupsAvatarColorSelect";
import GroupsFriendsSelect from "./GroupsFriendsSelect";
import GroupsPrivacySelect from "./GroupsPrivacySelect";

function GroupsFilters() {
  return (
    <>
      <div>
        <GroupsPrivacySelect />
        <GroupsAvatarColorSelect style={{ marginLeft: "5px" }} />
      </div>
      <div>
        <GroupsFriendsSelect />
      </div>
    </>
  );
}

export default GroupsFilters;
