// import Components from react native
import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   btn: {
      width: "50%",
      justifyContent: "center",
      backgroundColor: "coral",
      margin: 30,
      padding: 30,
   },
});

const Home = ({ navigation }) => {
   return (
      <SafeAreaView>
         <Text>The home screen works just fine</Text>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => {
               navigation.navigate("Login");
            }}
         >
            <Text>Go to login Screen</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => {
               navigation.navigate("Settings");
            }}
         >
            <Text>Go to Settings Screen</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => {
               navigation.navigate("Profile");
            }}
         >
            <Text>Go to Profile Screen</Text>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => {
               navigation.navigate("Matches");
            }}
         >
            <Text>Go to Matches Screen</Text>
         </TouchableOpacity>
      </SafeAreaView>
   );
};

export default Home;
