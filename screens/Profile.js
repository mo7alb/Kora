import { useEffect, useState, useCallback } from "react";
import {
   SafeAreaView,
   View,
   Text,
   StyleSheet,
   Alert,
   ScrollView,
} from "react-native";
import { useProfileContext } from "../context/profileContext";
import Logo from "../components/Logo";
import Constants from "expo-constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import NotAuthenticated from "../components/NotAuthenticated";
import CustomButton from "../components/CustomButton";

const makeRequest = async (url, setter) => {
   const token = await SecureStore.getItemAsync("token");
   try {
      let response = await axios.get(url, {
         headers: {
            authorization: `token ${token}`,
         },
      });

      setter(response.data);
   } catch (error) {
      Alert.alert("An error occured, try again later");
   }
};

/** functional component to display user profile */
const Profile = ({ navigation }) => {
   const [leagues, setLeagues] = useState(null);
   const [teams, setTeams] = useState(null);
   const [changes, setChanges] = useState(false);

   const { profile } = useProfileContext();

   const navigateToLogin = useCallback(
      () => navigation.navigate("Login"),
      [navigation]
   );

   useEffect(() => {
      const leagues_url = "http://localhost:3000/api/leagues/favorite-leagues";
      makeRequest(leagues_url, setLeagues);

      const teams_url = "http://localhost:3000/api/teams/favorite-teams";
      makeRequest(teams_url, setTeams);
      setChanges(false);
   }, [changes]);

   const removeFavoriteTeam = async team_id => {
      const url = `http://localhost:3000/api/teams/remove-favorite-team`;
      const token = await SecureStore.getItemAsync("token");

      axios
         .post(
            url,
            { team_id: team_id },
            {
               headers: { authorization: `token ${token}` },
            }
         )
         .then(response => {
            setChanges(true);
            Alert.alert("Removed favorite team");
         })
         .catch(error => Alert.alert("An error occurred, Try again later"));
   };

   return (
      <SafeAreaView style={styles.wrapper}>
         <Logo />
         {profile != null && (
            <View style={styles.componentWrapper}>
               <ScrollView style={{ height: "100%" }}>
                  <View style={styles.section}>
                     <Text style={styles.sectionTitle}>Favorite Leagues</Text>
                     {leagues && leagues.length == 0 && (
                        <Text>No favorite leagues, try adding some</Text>
                     )}
                     {leagues &&
                        leagues.map(league => (
                           <View style={{ borderBottomWidth: 1 }}>
                              <Text style={styles.title}>{league.title}</Text>
                           </View>
                        ))}
                     <Text style={styles.sectionTitle}>Favorite Teams</Text>
                     {teams && teams.length == 0 && (
                        <Text>No favorite Teams, try adding some</Text>
                     )}
                     {teams &&
                        teams.map(team => (
                           <View>
                              <Text style={styles.title}>{team.title}</Text>
                              <CustomButton
                                 content="Remove Team"
                                 size="lg"
                                 style="dark"
                                 additionalStyles={styles.btn}
                                 pressEvent={() => removeFavoriteTeam(team._id)}
                              />
                           </View>
                        ))}
                  </View>
               </ScrollView>
            </View>
         )}
         {profile == null && (
            <NotAuthenticated navigateToLogin={navigateToLogin} />
         )}
      </SafeAreaView>
   );
};

export default Profile;

const styles = StyleSheet.create({
   wrapper: {
      height: "100%",
      width: "100%",
      marginTop: Constants.statusBarHeight + 15,
   },
   componentWrapper: {
      height: "80%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   section: {
      height: "100%",
      width: "100%",
   },
   sectionTitle: {
      fontSize: 25,
      fontWeight: "600",
      textAlign: "center",
      marginVertical: 35,
   },
   title: {
      fontSize: 22,
      fontWeight: "600",
      textAlign: "center",
   },
   btn: {
      marginVertical: 20,
   },
});
