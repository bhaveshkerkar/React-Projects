import React, { useRef } from "react";
import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userId = useRef();
  const postTitle = useRef();
  const postBody = useRef();
  const postReactions = useRef();
  const postTags = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User ID here !
        </label>
        <input
          type="text"
          ref={userId}
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
          ref={postTitle}
          className="form-control"
          id="title"
          placeholder="How are you feeling today!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post content
        </label>
        <textarea
          type="text"
          ref={postBody}
          rows="4"
          className="form-control"
          id="body"
          placeholder="What's on your mind?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Enter Number of Reactions
        </label>
        <textarea
          type="text"
          ref={postReactions}
          className="form-control"
          id="reactions"
          placeholder="How many reactions do you expect?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter Your hashtags here!
        </label>
        <textarea
          type="text"
          ref={postTags}
          className="form-control"
          id="tags"
          placeholder="Enter tags separated by commas"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default CreatePost;
