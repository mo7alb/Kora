import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
} from "react-native";
import { useFavoriteMatchContext } from "../context/favoriteMatchesContext";
import { useProfileContext } from "../context/profileContext";
import Team from "./Team";

/**
 * sceen to be shown at Home sceen when user is logged in
 */
const Authenticated = ({ navigation }) => {
   const { profile } = useProfileContext();
   const { matches, error } = useFavoriteMatchContext();

   let res;

   if (JSON.stringify(matches) == JSON.stringify([])) {
      res = (
         <View>
            <Text>No matches yet, try following teams</Text>
         </View>
      );
   } else if (matches != null) {
      res = matches.map(match => {
         return (
            <TouchableOpacity
               key={match._id}
               style={styles.clickable}
               onPress={() =>
                  navigation.navigate("MatchDetails", { match_id: match._id })
               }
            >
               <View style={styles.row}>
                  <Team teamId={match.homeTeam.team} />
                  <Text>Vs</Text>
                  <Team teamId={match.awayTeam.team} />
               </View>
            </TouchableOpacity>
         );
      });
   }

   return (
      <View style={styles.container}>
         <ScrollView style={{ height: "100%" }}>
            <View style={styles.wrapper}>
               <Text style={styles.welcomeText}>
                  Welcome, {profile.username}
               </Text>
               {error && <Text>An error occurred, try again later</Text>}
               {res}
            </View>
         </ScrollView>
      </View>
   );
};

export default Authenticated;

const styles = StyleSheet.create({
   container: {
      height: "500%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   welcomeText: {
      fontSize: 25,
      fontWeight: "600",
      marginBottom: 15,
   },
   teamName: {
      textAlign: "center",
      fontSize: 18,
      marginVertical: 20,
   },
   wrapper: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
   },
   row: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      width: "100%",
   },
   clickable: {
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 5,
      width: "100%",
      marginBottom: 20,
   },
});
