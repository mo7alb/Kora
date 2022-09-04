import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { useFavoriteMatchContext } from "../context/favoriteMatchesContext";
import { useProfileContext } from "../context/profileContext";

/**
 * sceen to be shown at Home sceen when user is logged in
 */
const Authenticated = () => {
   const { profile } = useProfileContext();
   const { matches, error, fetchFavoriteMatches } = useFavoriteMatchContext();

   // fetch all matches when component is first rendered
   useEffect(() => fetchFavoriteMatches(), []);

   return (
      <View style={styles.container}>
         <Text style={styles.welcomeText}>Welcome, {profile.username}</Text>
         {error && <Text>An error occurred, try again later</Text>}

         {matches != null && JSON.stringify(matches) == JSON.stringify([]) ? (
            <Text>No favorite matches yet, try following teams</Text>
         ) : (
            <Text>{JSON.stringify(matches)}</Text>
         )}
      </View>
   );
};

export default Authenticated;

const styles = StyleSheet.create({
   container: {
      height: "80%",
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
});
