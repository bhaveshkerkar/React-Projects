import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  return newPostList; // Placeholder
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE",
      payload: {
        postId,
      },
    });
  };

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
    title: "stranger things",
    content: "Starnger things is a popular TV show.",
    userID: "user1",
    tags: ["Kids", "superHero", "super girl"],
    reactions: { like: 10, love: 5, laugh: 2 },
  },

  {
    id: "2",
    title: "Iron Man",
    content: "Iron Man is a popular superhero movie.",
    userID: "user2",
    tags: ["iron man", "super hero", "power"],
    reactions: { like: 7, love: 3, laugh: 1 },
  },
];

export default PostListProvider;
