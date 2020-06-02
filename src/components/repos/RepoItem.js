import React from "react";
import PropTypes from "prop-types";

function RepoItem({ repo }) {
  return (
    <div className="card user-repo text-center">
      <h5>{repo.name}</h5>
      <ul>
        <li>{repo.description}</li>
        <li>Language: {repo.language}</li>
        <li>Created at: {repo.created_at}</li>
        <li>Forks: {repo.forks_count}</li>
      </ul>
    </div>
  );
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
