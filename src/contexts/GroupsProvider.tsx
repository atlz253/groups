import { ReactNode } from "react";
import { default as context } from "./GroupsContext";
import { useGroupsReducer } from "../hooks/groups";

function GroupsProvider({ children }: { children: ReactNode }) {
  const { GroupsContext } = context;
  const groupContextValue = useGroupsReducer();

  return (
    <GroupsContext.Provider value={groupContextValue}>
      {children}
    </GroupsContext.Provider>
  );
}

export default GroupsProvider;
