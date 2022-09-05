import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

const PlayerDetails = ({ route, navigation }) => {
   const { player, team } = route.params;
   const [playerDetails, setPlayerDetails] = useState(null);

   useEffect(() => {
      if (playerDetails != null) return;
      const url = `http://localhost:3000/api/players/${player._id}`;
      axios
         .get(url)
         .then(response => {
            console.log(response.data);
            setPlayerDetails(response.data);
         })
         .catch(error => {
            console.error(error);
         });
   });
   return (
      <SafeAreaView style={styles.container}>
         <Text style={styles.playerName}>
            {playerDetails && playerDetails.name}
         </Text>
         <Text style={styles.details}>
            Shirt number - {playerDetails && playerDetails.shirtNumber}
         </Text>
         <Text style={styles.details}>
            Age - {playerDetails && playerDetails.age}
         </Text>
         <Text style={styles.details}>
            Country - {playerDetails && playerDetails.country}
         </Text>
         <Text style={styles.details}>
            Position - {playerDetails && playerDetails.position}
         </Text>

         <Text style={styles.details}>Plays for {team}</Text>
      </SafeAreaView>
   );
};

export default PlayerDetails;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   playerName: {
      fontSize: 28,
      marginBottom: 15,
      fontWeight: "600",
   },
   details: {
      fontSize: 19,
      marginBottom: 10,
      fontWeight: "400",
   },
});
