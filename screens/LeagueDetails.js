import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   ScrollView,
   Alert,
} from "react-native";
import { useLeaguesContext } from "../context/LeaguesContext";
import { useState, useEffect } from "react";
import TeamsList from "../components/TeamsList";
import CustomButton from "../components/CustomButton";
import * as SecureStore from "expo-secure-store";
import axios from "axios";

/** functional Component to display league details */
const LeagueDetails = ({ route, navigation }) => {
   const { league_id } = route.params;

   const { getLeague } = useLeaguesContext();
   const [league, setLeague] = useState(null);
   const [teams, setTeams] = useState(null);

   useEffect(() => setLeague(getLeague(league_id)), []);
   useEffect(() => {
      axios
         .get(`http://localhost:3000/api/leagues/teams/${league_id}`)
         .then(response => setTeams(response.data))
         .catch(error => console.error(error));
   }, []);

   const addFavoriteLeague = async () => {
      const url = `http://localhost:3000/api/leagues/add-favorite-league`;
      const token = await SecureStore.getItemAsync("token");
      let data = { league_id: league_id };

      axios
         .post(url, data, {
            headers: { authorization: `token ${token}` },
         })
         .then(response => Alert.alert("Started following the League"))
         .catch(error => {
            if (error.message == "Request failed with status code 400") {
               Alert.alert("Already following league");
               return;
            }
            Alert.alert("An error occurred, Try again later");
         });
   };

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <Text style={styles.leagueTitle}>
               {league != null && league.title}
            </Text>
            <Text style={styles.details}>
               Country - {league != null && league.country}
            </Text>
            <View style={styles.btnContainer}>
               <CustomButton
                  style="dark"
                  size="lg"
                  content={`Follow ${
                     (league != null && league.title) || "league"
                  }`}
                  additionalStyles={styles.btn}
                  pressEvent={addFavoriteLeague}
               />
            </View>
            {teams != null && (
               <TeamsList
                  key={league_id}
                  teams={teams}
                  navigation={navigation}
               />
            )}
         </ScrollView>
      </SafeAreaView>
   );
};

export default LeagueDetails;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: "100%",
   },
   leagueTitle: {
      fontSize: 21,
      textAlign: "center",
      fontWeight: "600",
      marginVertical: 25,
   },
   details: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: "center",
   },
   btnContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   btn: {
      marginVertical: 25,
   },
});
