import { Alert, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import { Cell, Section } from "react-native-tableview-simple";
import Match from "./Match";
import axios from "axios";

/**
 * Functional component for display a league and its matches
 */
const League = ({ league, navigation }) => {
   const [matches, setMatches] = useState(null);
   const [loading, setLoading] = useState(false);

   // fetch the matches when component renders
   useEffect(() => {
      if (matches !== null) return;
      setLoading(true);
      const url = `http://localhost:3000/api/matches/league/${league._id}`;
      axios
         .get(url)
         .then(response => {
            setMatches(response.data);
            setLoading(false);
         })
         .catch(error => {
            Alert.alert("An error occurred, try again later");
         });
   }, []);

   return (
      <Section header={league.title}>
         {loading == true && <ActivityIndicator />}

         {matches &&
            !loading &&
            matches.map(match => (
               <Cell
                  key={match._id}
                  cellContentView={
                     <Match match={match} navigation={navigation} />
                  }
               />
            ))}
      </Section>
   );
};

export default League;
