import React from "react";
import { useNavigate } from "react-router-dom";

const Friend = (props) => {
  const { name, username, id } = props.friend;
  const navigate = useNavigate();
  const showFriendsDetail = () => {
    const path = `/friends/${id}`;
    navigate(path);
  };
  return (
    <div>
      <h3>Name: {name}</h3>
      <button onClick={showFriendsDetail} className="btn btn-primary rounded">
        {username}id : {id}
      </button>
    </div>
  );
};

export default Friend;
