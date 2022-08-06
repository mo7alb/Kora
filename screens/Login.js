// import Components from react native
import {
   SafeAreaView,
   View,
   Text,
   StyleSheet,
   TouchableOpacity,
} from "react-native";
import Navbar from "../components/Navbar";

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
   btn: {
      paddingHorizontal: 45,
      paddingVertical: 20,
      borderRadius: 25,
      marginBottom: 2,
   },
   btnBlue: {
      backgroundColor: "#6989F8",
   },
   btnBlack: {
      backgroundColor: "#646467",
      color: "#FFF",
   },
   btnContent: {
      textAlign: "center",
      fontSize: 15,
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
               <TouchableOpacity
                  style={[styles.btn, styles.btnBlue]}
                  onPress={() => console.log("trying to log in with Google")}
               >
                  <Text style={styles.btnContent}>Login with Google</Text>
               </TouchableOpacity>
               <TouchableOpacity
                  style={[styles.btn, styles.btnBlack]}
                  onPress={() => console.log("trying to log in with GitHub")}
               >
                  <Text style={styles.btnContent}>Login with GitHub</Text>
               </TouchableOpacity>
            </View>

            <Navbar navigation={navigation} />
         </View>
      </SafeAreaView>
   );
};

export default Login;
