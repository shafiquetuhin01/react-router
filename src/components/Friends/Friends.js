import React, { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div>
      <h2>This is friends page</h2>
      <h3>The total no of friends are: {friends.length}</h3>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id}></Friend>
      ))}
    </div>
  );
};

export default Friends;
