import { StyleSheet, Text, View, SafeAreaView } from "react-native";

import Logo from "../components/Logo";
import Constants from "expo-constants";

const Matches = () => {
   return (
      <SafeAreaView style={styles.container}>
         <Logo />

         <View style={styles.componentContainer}>
            <Text>Matches page works just fine</Text>
         </View>
      </SafeAreaView>
   );
};

export default Matches;

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      marginTop: Constants.statusBarHeight + 15,
   },
   componentContainer: {
      height: "80%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
});
