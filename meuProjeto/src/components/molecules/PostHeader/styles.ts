import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 7,
    paddingHorizontal: 10,
  },
  postAvatar: {
    width: 32,
    height: 32,
    marginRight: 9,
  },
  postUsername: {
    fontSize: 12,
    fontWeight: "bold",
  },
  postLocation: {
    fontSize: 10,
  },
});
export default styles;
