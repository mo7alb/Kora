import axios from "axios";
import { useEffect, useState } from "react";
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
});

const Team = ({ teamId, score }) => {
   const [team, setTeam] = useState(null);

   useEffect(() => {
      if (team != null) return;

      const url = `http://localhost:3000/api/teams/${teamId}`;
      axios
         .get(url)
         .then(response => {
            setTeam(response.data);
         })
         .catch(error => console.error(error));
   }, []);

   return (
      <View style={styles.teamContainer}>
         <View style={styles.teamIdentifier}>
            <Text>{team && team.title}</Text>
         </View>
         {score && <Text style={styles.teamScore}>{score}</Text>}
      </View>
   );
};

export default Team;
