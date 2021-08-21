import React from "react";
import styles from "@/components/organisms/Post/styles";
import { View, Image, Text } from "react-native";
import {
  CommentIcon,
  FavoriteIcon,
  MessengerIcon,
  SaveIcon,
} from "@/global/styles/icons";
import PostHeader from "@/components/molecules/PostHeader";
const Post = ({ item }: any) => {
  return (
    <View style={styles.post}>
      <PostHeader name={"Fulano"} location="Somewhere" />
      <Image source={item.cover} style={styles.cover} />

      <View style={styles.postFooter}>
        <View style={styles.postOptions}>
          <View style={styles.postOptionsSide}>
            <FavoriteIcon style={styles.postOptionsIcon} />
            <CommentIcon style={styles.postOptionsIcon} />
            <MessengerIcon style={styles.postOptionsIcon} />
          </View>

          <SaveIcon />
        </View>

        <View style={styles.postAbout}>
          <Image source={item.lastLiked.avatar} style={styles.lastLiked} />
          <Text style={styles.likes}>{item.likes}</Text>
        </View>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};
export default Post;
