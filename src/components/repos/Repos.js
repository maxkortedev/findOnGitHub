import React, { useContext } from "react";
import RepoItem from "./RepoItem";
import GithubContext from "../../context/github/githubContext";

function Repos() {
  const githubContext = useContext(GithubContext);

  const { repos } = githubContext;

  return (
    <div className="user-repos container align-items-center text-center p-5 my-4">
      <h2>Users Repositories:</h2>
      {repos.map((repo) => (
        <RepoItem repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

export default Repos;
