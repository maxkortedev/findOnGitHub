import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

function User({ match }) {
  const githubContext = useContext(GithubContext);

  const {
    user: {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    },
    loading,
    getUser,
    getRepos,
  } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  if (loading) return <Spinner />;
  else
    return (
      <Fragment>
        <Link to="/" className="btn btn-light">
          Back to Search
        </Link>
        <div className="user container align-items-center text-center p-5">
          <img src={avatar_url} alt="" width="100px" />
          <h1>{login}</h1>
          <h3>{name}</h3>
          <p>{bio}</p>
          <p>Location: {location}</p>
          <p>{blog}</p>
          <p>Followers: {followers}</p>
          <p>Following: {following}</p>
          <p>Public Repositories: {public_repos}</p>
          <p>Public Gists: {public_gists}</p>
          <p>Hireable: {hireable ? <span>yes</span> : <span>no</span>}</p>
          <a target="_blank" rel="noopener noreferrer" href={html_url}>
            See Profile
          </a>
        </div>
        <Repos />
      </Fragment>
    );
}

export default User;
