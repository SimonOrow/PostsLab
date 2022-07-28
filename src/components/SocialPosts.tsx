import { useState } from "react";
import Post from "../models/Post";
import PostForm from "./PostForm";
import PostInList from "./PostInList";
import "./SocialPosts.css";

const SocialPosts = () => {
  const [posts, setPosts] = useState<Post[]>([
    {
      title: "Steak",
      thought: "Phenomenal",
    },
    {
      title: "Steak",
      thought: "Damn, that was good",
    },
    {
      title: "React",
      thought: "It will make our lives easier in the future",
    },
  ]);

  const deleteAPost = (index: number): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.splice(index, 1);
      return newList;
    });
  };

  const addAPost = (post: Post): void => {
    setPosts((prev) => {
      const newList: Post[] = prev.slice(0);
      newList.unshift(post);
      return newList;
    });
  };

  return (
    <div className="SocialPosts">
      <PostForm onAdd={addAPost} />
      <ul>
        {posts.map((item, index) => (
          <PostInList
            post={item}
            onDelete={() => deleteAPost(index)}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default SocialPosts;