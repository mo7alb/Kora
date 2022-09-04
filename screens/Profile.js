// import components from react native
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import Logo from "../components/Logo";
import Constants from "expo-constants";
import { useEffect, useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const makeRequest = async (url, setter) => {
   const token = await SecureStore.getItemAsync("token");
   console.log(token);
   try {
      let response = await axios.get(url, {
         headers: {
            authorization: `token ${token}`,
         },
      });

      setter(response.data);
   } catch (error) {
      console.log(error);
   }
};

const Profile = ({ navigation }) => {
   const [leagues, setLeagues] = useState(null);
   const [teams, setTeams] = useState(null);

   useEffect(() => {
      const leagues_url = "http://localhost:3000/api/leagues/favorite-leagues";
      makeRequest(leagues_url, setLeagues);

      const teams_url = "http://localhost:3000/api/teams/favorite-teams";
      makeRequest(teams_url, setTeams);
   }, []);

   return (
      <SafeAreaView style={styles.wrapper}>
         <Logo />
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
