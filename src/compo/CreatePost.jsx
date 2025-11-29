import React, { use, useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const postReactionsElement = useRef();
  const postTagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const postReactions = postReactionsElement.current.value;
    const postTags = postTagsElement.current.value.split(/(\s+)/);

    addPost(userId, postTitle, postBody, postReactions, postTags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here !
        </label>
        <input
          type="text"
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your user id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="Enter post title here !"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          ref={postBodyElement}
          rows="4"
          className="form-control"
          id="body"
          placeholder="Write your post content here !"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter Number of Reactions
        </label>
        <textarea
          type="text"
          ref={postReactionsElement}
          className="form-control"
          id="reactions"
          placeholder="Enter reactions in JSON format e.g., { like: 0, love: 0, laugh: 0 }"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here!
        </label>
        <textarea
          type="text"
          ref={postTagsElement}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit post
      </button>
    </form>
  );
};
export default CreatePost;
