import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  return (
    <div>
      <h4>This is post details: {postId}</h4>
      <h5>
        <small>{post.title}</small>
      </h5>
      <h6>
        <small>{post.body}</small>
      </h6>
    </div>
  );
};

export default PostDetail;
