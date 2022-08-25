import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { useCallback } from "react";
import CustomButton from "../components/CustomButton";
import RegistrationForm from "../components/RegistrationForm";

const Register = ({ navigation }) => {
   return (
      <SafeAreaView>
         <View style={styles.header}>
            <Text style={styles.welcomeText}>Welcome to Kora</Text>
            <Text style={styles.title}>Register</Text>
         </View>
         <View style={styles.registrationContainer}>
            <RegistrationForm />
            <View style={styles.loginContainer}>
               <Text style={styles.loginText}>Already have an account</Text>
               <CustomButton
                  content="Login"
                  size="lg"
                  style="dark"
                  pressEvent={useCallback(() => {
                     navigation.navigate("Login");
                  }, [])}
               />
            </View>
         </View>
      </SafeAreaView>
   );
};

export default Register;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      height: "100%",
   },
   header: {
      height: "30%",
      display: "flex",
      justifyContent: "space-between",
   },
   welcomeText: {
      fontSize: 26,
      textAlign: "center",
      fontWeight: "900",
      marginTop: 15,
   },
   title: {
      fontSize: 20,
      textAlign: "center",
      fontWeight: "700",
   },
   registrationContainer: {
      maxHeight: "50%",
   },
   loginContainer: {
      justifyContent: "center",
      alignItems: "center",
   },
   loginText: {
      fontSize: 16,
      marginBottom: 10,
   },
});
