import { memo } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";

/**
 * A View displayed in the Home screen if the user is not logged in
 * @param {Props} props Props passed to the component from the parent component
 * @returns A view to convince users to log in
 */
const NotAuthenticated = ({ navigateToLogin }) => (
   <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome to Kora</Text>
      <Text style={styles.moto}>Football in one go</Text>
      <Text>Log in to keep track of your favorite matches</Text>
      <CustomButton
         style="dark"
         size="md"
         content="Login"
         pressEvent={navigateToLogin}
         additionalStyles={styles.btn}
      />
   </View>
);

export default memo(NotAuthenticated);

const styles = StyleSheet.create({
   container: {
      height: "80%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   welcomeText: {
      fontSize: 25,
      fontWeight: "600",
      marginBottom: 15,
   },
   btn: {
      marginTop: 10,
   },
   moto: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 15,
   },
});
