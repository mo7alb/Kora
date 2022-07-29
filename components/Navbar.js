import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { CommonActions } from "@react-navigation/native";

const styles = StyleSheet.create({
   nav: {
      width: "100%",
      height: "15%",
      backgroundColor: "coral",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "absolute",
      bottom: 1,
   },
   btn: {},
   btnContent: {
      alignItems: "center",
   },
});

const Navbar = ({ navigation }) => {
   return (
      <View style={styles.nav}>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate({ name: "Home" })}
         >
            <View style={styles.btnContent}>
               <Icon name="home" color="#000" size={32} />
               <Text>Home</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate({ name: "Matches" })}
         >
            <View style={styles.btnContent}>
               <Icon name="game-controller" color="#000" size={32} />
               <Text>Matches</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate({ name: "Profile" })}
         >
            <View style={styles.btnContent}>
               <Icon name="person" color="#000" size={32} />
               <Text>Profile</Text>
            </View>
         </TouchableOpacity>
         <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.navigate({ name: "Settings" })}
         >
            <View style={styles.btnContent}>
               <Icon name="settings" color="#000" size={32} />
               <Text>Settings</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default Navbar;
