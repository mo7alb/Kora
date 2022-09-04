import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Team from "./Team";

const Match = ({ match, navigation }) => {
   let date = new Date(match.date);
   let fullTime = date.toDateString() < new Date().toDateString();

   date = date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
   });

   return (
      <TouchableOpacity
         onPress={() =>
            navigation.navigate("MatchDetails", { match_id: match._id })
         }
      >
         <View style={styles.container}>
            <View style={styles.teamsData}>
               <Team
                  teamId={match.homeTeam.team}
                  score={match.homeTeam?.score}
               />
               <Team
                  teamId={match.awayTeam.team}
                  score={match.awayTeam?.score}
               />
            </View>
            <View style={styles.timeDetails}>
               <Text style={styles.timeData}>
                  {fullTime == false ? date : "Full time"}
               </Text>
               <Text>{match.venue}</Text>
            </View>
         </View>
      </TouchableOpacity>
   );
};

export default Match;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#fff",
   },
   teamsData: {
      width: "50%",
      borderRightWidth: 2,
      paddingTop: 5,
   },
   timeDetails: {
      width: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingLeft: 12,
   },
   timeData: {
      textAlign: "center",
      padding: 10,
   },
});
