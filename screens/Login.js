// import Components from react native
import {
   SafeAreaView,
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";
// import custom components
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: "100%",
      backgroundColor: "#DEDEDE",
   },
   content: {
      height: "100%",
   },
   welcomeTextContainer: {
      flex: 1,
      display: "flex",
      justifyContent: "flex-end",
      paddingHorizontal: "5%",
      maxHeight: "40%",
   },
   bodyTextContainer: {
      flex: 0.5,
      paddingHorizontal: "5%",
      maxHeight: "32%",
      display: "flex",
      justifyContent: "center",
   },
   signUpContainer: {
      flex: 0.5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: "20%",
   },
   welcomeText: {
      fontSize: 45,
      fontWeight: "bold",
   },
   appName: {
      fontSize: 60,
      fontWeight: "900",
   },
   motto: {
      fontSize: 30,
   },
});

const Login = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <View style={styles.content}>
            <View style={styles.welcomeTextContainer}>
               <Text style={styles.welcomeText}>Welcome to</Text>
               <Text style={styles.appName}>Kora</Text>
            </View>
            <View style={styles.bodyTextContainer}>
               <Text style={styles.motto}>Football at one Go.</Text>
            </View>
            <View style={styles.signUpContainer}>
               <CustomButton
                  content="Login with Google"
                  size="lg"
                  style="blue"
                  pressEvent={() => console.log("trying to log in with Google")}
                  additionalStyles={{ marginBottom: 3 }}
               />
               <CustomButton
                  content="Login with GitHub"
                  pressEvent={() => console.log("trying to log in with GitHub")}
                  size="lg"
                  style="grey"
               />

               <TouchableOpacity style={[styles.btn, styles.btnBlack]}>
                  <Text style={styles.btnContent}></Text>
               </TouchableOpacity>
            </View>

            <Navbar navigation={navigation} />
         </View>
      </SafeAreaView>
   );
};

export default Login;
