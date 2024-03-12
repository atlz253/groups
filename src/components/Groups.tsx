import GroupCard from "./GroupCard/GroupCard";
import { useGroups } from "../hooks/groups";

function Groups() {
  const { groups } = useGroups();

  if (groups.length === 0) {
    return <div>Группы по данному запросу отсутствуют</div>;
  }

  return (
    <>
      {groups.map((group) => (
        <GroupCard {...group} key={group.id}></GroupCard>
      ))}
    </>
  );
}

export default Groups;
