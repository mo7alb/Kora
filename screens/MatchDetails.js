import {
   StyleSheet,
   Text,
   View,
   SafeAreaView,
   ActivityIndicator,
   TouchableOpacity,
} from "react-native";
import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { useLeaguesContext } from "../context/LeaguesContext";

const makeRequest = (url, setter, loadingSetter) => {
   loadingSetter(true);
   axios
      .get(url)
      .then(response => {
         setter(response.data);
         loadingSetter(false);
      })
      .catch(error => console.error(error));
};

/** functional component that represents a screen with the match details */
const MatchDetails = ({ route, navigation }) => {
   const { match_id } = route.params;

   const [match, setMatch] = useState(null);
   const [homeTeam, setHomeTeam] = useState(null);
   const [awayTeam, setAwayTeam] = useState(null);
   const [league, setLeague] = useState(null);
   const [loading, setLoading] = useState(false);

   const { getLeague } = useLeaguesContext();

   useEffect(() => {
      if (match != null) return;

      const match_url = `http://localhost:3000/api/matches/${match_id}`;
      makeRequest(match_url, setMatch, setLoading);
   }, []);

   useEffect(() => {
      if (match == null || homeTeam != null || awayTeam != null) return;
      console.log(match.league);
      const homeTeamURL = `http://localhost:3000/api/teams/${match.homeTeam.team}`;
      makeRequest(homeTeamURL, setHomeTeam, setLoading);
      const awayTeamURL = `http://localhost:3000/api/teams/${match.awayTeam.team}`;
      makeRequest(awayTeamURL, setAwayTeam, setLoading);
      let league = getLeague(match.league);
      console.log(league);
      setLeague(league);
   }, [match]);

   return (
      <SafeAreaView style={styles.container}>
         {loading == true && <ActivityIndicator />}
         {loading == false && (
            <View style={styles.wrapper}>
               <View style={styles.row}>
                  <View style={styles.col}>
                     <TouchableOpacity
                        style={styles.clickable}
                        onPress={() => {
                           navigation.navigate("TeamDetails", {
                              team: homeTeam,
                           });
                        }}
                     >
                        <Text style={styles.teamTitles}>
                           {homeTeam && homeTeam.title}
                        </Text>
                     </TouchableOpacity>
                  </View>
                  <View style={styles.col}>
                     <TouchableOpacity
                        style={styles.clickable}
                        onPress={() => {
                           navigation.navigate("TeamDetails", {
                              team: awayTeam,
                           });
                        }}
                     >
                        <Text style={styles.teamTitles}>
                           {awayTeam && awayTeam.title}
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>

               <Text style={styles.indicators}>Time</Text>
               <Text style={styles.indicators}>
                  {match && new Date(match.date).toDateString()}
               </Text>
               <Text style={styles.indicators}>Competition</Text>
               <Text style={styles.indicators}>{league && league.title}</Text>
               <Text style={styles.indicators}>Stadium</Text>
               <Text style={styles.indicators}>{match && match.venue}</Text>
            </View>
         )}
      </SafeAreaView>
   );
};

export default MatchDetails;

const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
   },
   wrapper: {
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   col: {
      width: "50%",
      paddingHorizontal: 10,
      paddingVertical: 20,
   },
   teamTitles: {
      textAlign: "center",
      fontSize: 17,
   },
   matchDate: {
      textAlign: "center",
      fontSize: 13,
      paddingBottom: 5,
   },
   indicators: {
      textAlign: "center",
      fontSize: 17,
      marginVertical: 15,
      fontWeight: "600",
   },
   clickable: {
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 15,
      width: "100%",
   },
});
