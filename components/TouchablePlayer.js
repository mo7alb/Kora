import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

/**
 * functional component to display a single player as a button
 */
export const TouchablePlayer = ({ player, navigation }) => {
   return (
      <TouchableOpacity style={styles.clickable}>
         <Text style={{ textAlign: "center" }}>{player.name}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   clickable: {
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 15,
      width: "80%",
      marginBottom: 20,
   },
});
