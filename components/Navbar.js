// import packages
import { memo, useCallback } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// styles for the component
const styles = StyleSheet.create({
   // styles for the navbar area
   nav: {
      width: "100%",
      height: "8%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      position: "absolute",
      bottom: 0,
   },
   // styles for each button
   btn: {},
   // styles for the content of the button
   btnContent: {
      alignItems: "center",
   },
});

/**
 * A functional component that renders a navbar allowing
 * users to navigate through screens
 * @param {Object} props
 * @returns React component
 */
const Navbar = ({ navigation }) => {
   return (
      // container for all the navigation buttons
      <View style={styles.nav}>
         {/* button to route to the Home screen */}
         <TouchableOpacity
            style={styles.btn}
            onPress={useCallback(
               () => navigation.navigate({ name: "Home" }),
               []
            )}
         >
            <View style={styles.btnContent}>
               <Icon name="home" color="#000" size={32} />
               <Text>Home</Text>
            </View>
         </TouchableOpacity>
         {/* button to route to the Matches screen */}
         <TouchableOpacity
            style={styles.btn}
            onPress={useCallback(
               () => navigation.navigate({ name: "Matches" }),
               []
            )}
         >
            <View style={styles.btnContent}>
               <Icon name="game-controller" color="#000" size={32} />
               <Text>Matches</Text>
            </View>
         </TouchableOpacity>

         {/* button to route to the Profile screen */}
         <TouchableOpacity
            style={styles.btn}
            onPress={useCallback(
               () => navigation.navigate({ name: "Profile" }),
               []
            )}
         >
            <View style={styles.btnContent}>
               <Icon name="person" color="#000" size={32} />
               <Text>Profile</Text>
            </View>
         </TouchableOpacity>

         {/* button to route to the Settings screen */}
         <TouchableOpacity
            style={styles.btn}
            onPress={useCallback(
               () => navigation.navigate({ name: "Settings" }),
               []
            )}
         >
            <View style={styles.btnContent}>
               <Icon name="settings" color="#000" size={32} />
               <Text>Settings</Text>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default memo(Navbar);
