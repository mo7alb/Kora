// import Components from react native
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: "100%",
   },
});

const Login = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <Text>The Login screen works just fine</Text>
         <Navbar navigation={navigation} />
      </SafeAreaView>
   );
};

export default Login;
