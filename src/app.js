import React, { useRef } from "react";
// import MyInput from "./MyInput.js";
import Post from "./post.js";

export const App = () => {
  // const ref = useRef(null);
  const postRef = useRef(null);
  console.log("rendered");
  function handleCommentClick() {
    console.log("handleCommentClick");
    postRef.current.scrollAndFocusAddComment();
  }

  function handleClick() {
    ref.current.focus();
  }

  return (
    <form>
      {/* <MyInput placeholder="Enter your name" ref={ref} />
      <button type="button" onClick={handleClick}>
        Edit
      </button> */}

      {/* <hr></hr> */}
      <button onClick={handleCommentClick}>Write a comment</button>
      <Post ref={postRef} />
    </form>
  );
};
