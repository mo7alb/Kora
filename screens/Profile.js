import { useEffect, useState, useCallback } from "react";
import { SafeAreaView, View, Text, StyleSheet, Alert } from "react-native";
import { useProfileContext } from "../context/profileContext";
import Logo from "../components/Logo";
import Constants from "expo-constants";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import NotAuthenticated from "../components/NotAuthenticated";

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
   }, []);

   return (
      <SafeAreaView style={styles.wrapper}>
         <Logo />
         {profile != null && (
            <View style={styles.componentWrapper}>
               <View style={styles.section}>
                  <Text>Favorite Leagues</Text>
                  <Text>{JSON.stringify(leagues)}</Text>
               </View>
               <View style={styles.section}>
                  <Text>Favorite Teams</Text>
                  <Text>{JSON.stringify(teams)}</Text>
               </View>
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
      height: "50%",
      width: "100%",
   },
});
