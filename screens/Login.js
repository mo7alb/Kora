// import Components from react native
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import { useCallback } from "react";
import CustomButton from "../components/CustomButton";
import LoginForm from "../components/LoginForm";

const Login = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.welcomeTextContainer}>
            <Text style={styles.styledText}>Welcome to</Text>
            <Text style={styles.appName}>Kora</Text>
            <Text style={styles.styledText}>Football at one Go.</Text>
         </View>
         <View style={styles.signUpContainer}>
            <LoginForm />
            <View style={styles.registerContainer}>
               <Text style={styles.registerText}>
                  Don't have an account already
               </Text>
               <CustomButton
                  content="Register"
                  size="lg"
                  style="dark"
                  pressEvent={useCallback(() => {
                     navigation.navigate("Register");
                  }, [])}
               />
            </View>
         </View>
      </SafeAreaView>
   );
};

export default Login;

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   welcomeTextContainer: {
      height: "45%",
      display: "flex",
      justifyContent: "space-evenly",
      paddingLeft: 25,
   },
   styledText: {
      fontSize: 28,
      fontWeight: "700",
      color: "grey",
   },
   appName: {
      fontSize: 35,
      fontWeight: "900",
   },
   signUpContainer: {
      maxHeight: "55%",
      backgroundColor: "white",
      justifyContent: "center",
   },
   registerContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 15,
   },
   registerText: {
      fontSize: 16,
      marginBottom: 10,
   },
});
