import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { TouchablePlayer } from "../components/TouchablePlayer";
import { TouchableLeague } from "../components/TouchableLeague";

/**
 * Functional component to display details of a team
 */
const TeamDetails = ({ route, navigation }) => {
   const { team } = route.params;

   const [players, setPlayers] = useState(null);
   useEffect(() => {
      const url = `http://localhost:3000/api/players/team/${team._id}`;
      axios
         .get(url)
         .then(response => {
            setPlayers(response.data);
         })
         .catch(error => {
            console.error(error);
         });
   }, []);

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView style={styles.scroller}>
            <Text style={styles.teamTitle}>{team.title}</Text>
            <Text style={styles.details}>Head Coach - {team.coach}</Text>
            <Text style={styles.details}>Stadium - {team.stadium}</Text>

            {/* display list of leagues */}
            <Text style={[styles.details, { marginTop: 10 }]}>Leagues</Text>
            <View style={styles.leaguesContainer}>
               {team.leagues.map(league => (
                  <TouchableLeague
                     key={league.league}
                     league_id={league.league}
                     navigation={navigation}
                  />
               ))}
            </View>

            {/* display list of players */}
            <Text style={[styles.details, { marginTop: 10 }]}>Players</Text>
            {players && JSON.stringify(players) == JSON.stringify([]) ? (
               <Text>No player data available</Text>
            ) : (
               <View style={styles.playersContainer}>
                  {players &&
                     players.map(player => (
                        <TouchablePlayer
                           key={player._id}
                           player={player}
                           navigation={navigation}
                        />
                     ))}
               </View>
            )}
         </ScrollView>
      </SafeAreaView>
   );
};

export default TeamDetails;

export const styles = StyleSheet.create({
   container: {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   scroller: {
      width: "100%",
      height: "100%",
   },
   playersContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   leaguesContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   teamTitle: {
      textAlign: "center",
      fontSize: 25,
      fontWeight: "600",
      marginVertical: 30,
   },
   details: {
      fontSize: 18,
      marginBottom: 10,
      textAlign: "center",
   },
});
