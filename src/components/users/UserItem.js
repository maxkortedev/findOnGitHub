import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card text-center align-items-center p-4 flex-fill">
      <img src={avatar_url} alt="" className="profile-picture" />
      <h3 className="my-3">{login}</h3>
      <Link to={`/users/${login}`} className="btn-dark py-1 px-4">
        See More
      </Link>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};
export default UserItem;
