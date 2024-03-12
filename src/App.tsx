import "./App.css";
import Groups from "./components/Groups";
import GroupsFilters from "./components/GroupFilters/GroupsFilters";
import GroupsProvider from "./contexts/GroupsProvider";

function App() {
  return (
    <GroupsProvider>
      <GroupsFilters />
      <Groups />
    </GroupsProvider>
  );
}

export default App;
