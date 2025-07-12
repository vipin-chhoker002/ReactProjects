import React from "react";
import SearchBar from "./components/SearchBar";
import UserCard from "./components/UserCard";
import RepoDrawer from "./components/RepoDrawer";

function App() {
  return (
    <div className="max-w-3xl mx-auto p-6 relative">
      <SearchBar />
      <UserCard />
      <RepoDrawer />
    </div>
  );
}

export default App;
