import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const { searchUsers } = githubContext;
  const { clearAlert, changeAlert } = alertContext;

  const [text, setText] = useState();

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSearch = (e) => {
    clearAlert();
    if (text === "") {
      changeAlert("Please enter a valid username!", "danger");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  return (
    <div className="container input-group my-3">
      <input
        type="text"
        name="text"
        className="form-control"
        placeholder="Username"
        value={text}
        onChange={onChange}
      />
      <div className="input-group-append">
        {githubContext.users.length > 0 && (
          <button className="btn btn-danger" onClick={githubContext.clearUsers}>
            Clear
          </button>
        )}
        <button className="btn btn-dark" onClick={onSearch}>
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
