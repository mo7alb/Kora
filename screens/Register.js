import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   KeyboardAvoidingView,
} from "react-native";
import { useCallback } from "react";
import CustomButton from "../components/CustomButton";
import RegistrationForm from "../components/RegistrationForm";

const Register = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView>
            <View style={styles.welcomeTextContainer}>
               <Text style={styles.styledText}>Welcome to</Text>
               <Text style={styles.appName}>Kora</Text>
               <Text style={styles.styledText}>Football at one Go.</Text>
            </View>
            <View style={styles.registrationContainer}>
               <RegistrationForm navigation={navigation} />
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
         </KeyboardAvoidingView>
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
