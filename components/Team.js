import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   teamContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
   },
   teamIdentifier: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
   },
   teamScore: {
      justifyContent: "flex-end",
      alignItems: "flex-end",
   },
   teamLogo: {
      width: 30,
      height: 30,
      borderRadius: 5,
      backgroundColor: "#444",
      marginRight: 10,
      marginLeft: -10,
   },
});

const Team = ({ teamName, score }) => {
   return (
      <View style={styles.teamContainer}>
         <View style={styles.teamIdentifier}>
            <View style={styles.teamLogo} />
            <Text>{teamName}</Text>
         </View>
         {score != undefined ? (
            <Text style={styles.teamScore}>{score}</Text>
         ) : (
            <></>
         )}
      </View>
   );
};

export default Team;
