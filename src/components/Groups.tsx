import GroupCard from "./GroupCard/GroupCard";
import { useGroups } from "../hooks/groups";

function Groups() {
  const { groups } = useGroups();

  return (
    <>
      {groups.map((group) => (
        <GroupCard {...group} key={group.id}></GroupCard>
      ))}
    </>
  );
}

export default Groups;
