import { Text, View, StyleSheet } from "react-native";
import Team from "./Team";

const styles = StyleSheet.create({
   container: {
      width: "100%",
      padding: 15,
      display: "flex",
      flexDirection: "row",
      backgroundColor: "#fff",
   },
   teamsData: {
      width: "60%",
      borderRightWidth: 2,
      paddingRight: 15,
   },
   timeDetails: {
      width: "40%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   team1: {},
   team2: {},
});

const Match = ({ match }) => {
   console.log(match)
   return (
      <View style={styles.container}>
         <View style={styles.teamsData}>
            <View style={styles.team1}>
               <Team teamName={ match?.homeTeam.team } score={ match?.homeTeam.score } />
            </View>
            <View style={styles.team2}>
               <Team teamName={ match?.awayTeam.team } score={ match?.awayTeam.score } />
            </View>
         </View>
         <View style={styles.timeDetails}>
            <Text>Full time</Text>
            <Text>Half time</Text>
         </View>
      </View>
   );
};

export default Match;
