import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const FriendDetail = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFriend(data));
  }, []);
  return (
    <div className="border p-2 m-2 bg-primary text-white">
      <h2>This is a friend detail {friendId}</h2>
      <h3>Name : {friend.name}</h3>
      <h5>Email : {friend.email}</h5>
      <h4>Website : {friend.website}</h4>
      <h5>City: {friend.address?.city}</h5>
      <h5>
        <small>Latitude: {friend.address?.geo?.lat}</small>
      </h5>
    </div>
  );
};

export default FriendDetail;
