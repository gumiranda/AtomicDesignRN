import React from "react";
import styles from "@/components/templates/Posts/styles";
import { FlatList } from "react-native";
import { posts } from "@/utils/posts";

import Post from "@/components/organisms/Post";
const Posts = () => {
  return (
    <FlatList
      data={posts}
      style={styles.posts}
      showsVerticalScrollIndicator={false}
      keyExtractor={(post) => post.id}
      renderItem={({ item }) => <Post item={item} />}
    />
  );
};
export default Posts;
