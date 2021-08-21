import React from "react";
import styles from "@/components/molecules/PostHeader/styles";
import { View, Image, Text } from "react-native";
import { ProfileIcon } from "@/global/styles/icons";
const PostHeader = ({ name, location }: any) => {
  return (
    <View style={styles.postHeader}>
      <Image source={ProfileIcon} style={styles.postAvatar} />
      <View>
        <Text style={styles.postUsername}>{name}</Text>
        <Text style={styles.postLocation}>{location}</Text>
      </View>
    </View>
  );
};
export default PostHeader;
