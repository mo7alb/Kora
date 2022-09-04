import { StyleSheet, Text, View, Platform } from "react-native";
import React from "react";

const Logo = () => {
   return (
      <View style={styles.logoContainer}>
         <Text style={styles.logoText}>Kora</Text>
      </View>
   );
};

export default Logo;

const styles = StyleSheet.create({
   logoContainer: {
      backgroundColor: "#737575",
      width: "90%",
      marginStart: "5%",
      paddingVertical: 12,
      borderRadius: 25,
      marginVertical: 20,
   },
   logoText: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "700",
		color: "#D8AE48"
   },
});
