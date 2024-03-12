import { useEffect, useState } from "react";
import dataGateway from "../dataGateway/dataGateway";
import Group from "../group/Group";
import GroupCard from "./GroupCard/GroupCard";

function Groups() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    dataGateway.getGroups().then((groups) => setGroups(groups.data || []));
  }, []);

  return (
    <>
      {groups.map((group) => (
        <GroupCard {...group} key={group.id}></GroupCard>
      ))}
    </>
  );
}

export default Groups;
