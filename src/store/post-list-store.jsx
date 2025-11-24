import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList; // Placeholder
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = () => {};

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "First Post",
    content: "This is the content of the first post.",
    userID: "user1",
    tags: ["welcome", "first", "introduction"],
    reactions: { like: 10, love: 5, laugh: 2 },
  },

  {
    id: "2",
    title: "Second Post",
    content: "This is the content of the second post.",
    userID: "user2",
    tags: ["update", "news", "second"],
    reactions: { like: 7, love: 3, laugh: 1 },
  },
];

export default PostListProvider;
