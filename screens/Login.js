// import Components from react native
import { SafeAreaView, Text, StyleSheet } from "react-native";
import Navbar from "../components/Navbar";

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
});

const Login = ({ navigation }) => {
   return (
      <SafeAreaView style={{ height: "100%"}}>
         <Text>The Login screen works just fine</Text>
         <Navbar navigation={navigation} />
      </SafeAreaView>
   );
};

export default Login;
