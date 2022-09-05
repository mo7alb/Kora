import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useLeaguesContext } from "../context/LeaguesContext";
import { useState, useEffect } from "react";
import TeamsList from "../components/TeamsList";
import axios from "axios";

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

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <Text style={styles.leagueTitle}>
               {league != null && league.title}
            </Text>
            <Text style={styles.details}>
               Country - {league != null && league.country}
            </Text>
            {teams != null && <TeamsList teams={teams} />}
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
});
