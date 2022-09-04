import { View, Text, StyleSheet } from "react-native";

const Authenticated = () => (
   <View style={styles.container}>
      <Text>I am Authenticated</Text>
   </View>
);

export default Authenticated;

const styles = StyleSheet.create({
   container: {
      height: "80%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
});
