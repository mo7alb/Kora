import { View, Text, ActivityIndicator, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import CustomButton from "./CustomButton";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

/** A functional component to display a team's details */
const Team = ({ teamId, navigation }) => {
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

   const addFavoriteTeam = async () => {
      const url = `http://localhost:3000/api/teams/add-favorite-team`;
      const token = await SecureStore.getItemAsync("token");
      let data = { team_id: teamId };

      axios
         .post(url, data, {
            headers: { authorization: `token ${token}` },
         })
         .then(response => Alert.alert("Started following the team"))
         //Alert.alert("An error occurred")
         .catch(error => {
            if (error.message == "Request failed with status code 400") {
               Alert.alert("Already following Team");
               return;
            }

            Alert.alert("An error occurred, Try again later");
         });
   };

   return (
      <View style={styles.team}>
         {loading == false && (
            <View style={styles.teamRow}>
               <Text>{team && team.title}</Text>
               <CustomButton
                  style="dark"
                  size="lg"
                  content="Details"
                  additionalStyles={styles.btn}
                  pressEvent={() =>
                     navigation.navigate("TeamDetails", { team })
                  }
               />
               <CustomButton
                  style="dark"
                  size="lg"
                  content="Follow team"
                  additionalStyles={styles.btn}
                  pressEvent={addFavoriteTeam}
               />
            </View>
         )}
         {loading == true && (
            <View style={styles.loadingIndicator}>
               <ActivityIndicator />
            </View>
         )}
      </View>
   );
};

/** A functional component to display a list of teams  */
const TeamsList = ({ teams, navigation }) => {
   return (
      <View style={styles.container}>
         {teams.map(team => (
            <Team key={team._id} teamId={team._id} navigation={navigation} />
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
      width: "100%",
   },
   loadingIndicator: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   teamRow: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   btn: {
      marginVertical: 15,
   },
});
