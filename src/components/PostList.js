import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPost } from "../actions";
import HeaderUser from "./HeaderUser";

const PostList = (props) => {
  useEffect(() => {
    props.dispatch(fetchPost());
  }, []);

  const render = props? props.posts?.map((post, idx) => (
    <div key={post.id.toString()} className="col-12 m-3" style={{ border: "2px solid black" }}>
        <HeaderUser userId={post.userId} />
      <h3 className="p-2">
        <strong>Title: </strong> {post.title}
      </h3>
      <h4 className="p-2">
        <strong>Content:</strong> {post.body}
      </h4>
      <p>
        <small>{post.userId}</small>
      </p>
    </div> 
  )): '';
  return <div className="row">{render}</div>;
};
const getState = (state) => {
  return { posts: state.postList };
};

export default connect(getState)(PostList);
