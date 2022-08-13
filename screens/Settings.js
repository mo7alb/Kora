// import Components from react native
import { View, Text, StyleSheet, SafeAreaView } from "react-native";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: "100%",
   },
});

const Settings = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <Text>The Settings screen works just fine</Text>
      </SafeAreaView>
   );
};

export default Settings;
