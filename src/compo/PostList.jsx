import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpiner from "./LoadingSpiner";

const PostList = () => {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  useEffect(() => {
    setFetching(true);

    const controller = new AbortController();
    const signal = controller.signal;

    // Logic to fetch posts from the server
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      {fetching && <LoadingSpiner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {!fetching &&
        postList.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};

export default PostList;
