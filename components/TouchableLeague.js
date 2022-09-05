import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { useLeaguesContext } from "../context/LeaguesContext";
import React, { useEffect, useState } from "react";

/** functional component to display a single league as a button */
export const TouchableLeague = ({ league_id, navigation }) => {
   const { getLeague } = useLeaguesContext();
   const [league, setLeague] = useState(null);

   useEffect(() => setLeague(getLeague(league_id)), []);

   return (
      <TouchableOpacity
         style={styles.clickable}
         onPress={() => navigation.navigate("LeagueDetails", { league_id })}
      >
         <Text style={{ textAlign: "center" }}>{league && league.title}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   clickable: {
      borderWidth: 1,
      borderRadius: 10,
      paddingVertical: 15,
      width: "80%",
      marginBottom: 20,
   },
});
