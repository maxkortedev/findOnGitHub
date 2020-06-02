import React from "react";
import Search from "../users/Search";
import Alert from "../layout/Alert";
import Users from "../users/Users";

function Home() {
  return (
    <div className="home">
      <Search />
      <Alert />
      <Users />
    </div>
  );
}

export default Home;
