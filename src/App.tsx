import { useEffect, useState } from "react";
import "./App.css";
import Group from "./group/Group";
import dataGateway from "./dataGateway/dataGateway";
import GroupCard from "./components/GroupCard";

function App() {
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

export default App;
