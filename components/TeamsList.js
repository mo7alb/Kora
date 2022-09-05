import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";

const Team = ({ teamId }) => {
   const [team, setTeam] = useState(null);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true);
      const url = `http://localhost:3000/api/teams/${teamId}`;
      axios
         .get(url)
         .then(response => {
            setTeam(response.data);
            setLoading(false);
         })
         .catch(error => console.error(error));
   }, []);

   return (
      <View style={styles.team}>
         {loading == false && (
            <>
               <Text>{team && team.title}</Text>
            </>
         )}
         {loading == true && (
            <View style={styles.loadingIndicator}>
               <ActivityIndicator />
            </View>
         )}
      </View>
   );
};

const TeamsList = ({ teams }) => {
   //teams.map(team => <TouchableTeam key={team._id} team={team} />)
   return (
      <View style={styles.container}>
         {teams.map(team => (
            <Team teamId={team._id} />
         ))}
      </View>
   );
};

export default TeamsList;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: "100%",
   },
   team: {
      padding: 25,
      marginBottom: 15,
      borderBottomWidth: 1,
   },
   loadingIndicator: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
});
