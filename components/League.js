import { Alert, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Cell, Section } from "react-native-tableview-simple";
import Match from "./Match";
import axios from "axios";

/**
 * Function to display a single match
 */
// const Match = ({ match }) => (
//    <Cell
//       cellContentView={
//          <View>
//             <Text>Home team</Text>
//             <Text>Away team</Text>
//          </View>
//       }
//    />
// );

/**
 * Functional component for display a league and its matches
 */
const League = ({ league }) => {
   const [matches, setMatches] = useState(null);

   // fetch the matches when component renders
   useEffect(() => {
      if (matches !== null) return;

      const url = `http://localhost:3000/api/matches/league/${league._id}`;
      axios
         .get(url)
         .then(response => {
            console.log(response.data);
            setMatches(response.data);
         })
         .catch(error => {
            console.log(error.response.data);
            Alert.alert("An error occurred, try again later");
         });
   }, []);

   return (
      <Section header={league.title}>
         <Text>this is a league</Text>
         {matches &&
            matches.map(match => (
               <Cell
                  key={match._id}
                  cellContentView={<Match match={match} />}
               />
            ))}
      </Section>
   );
};

export default League;

const styles = StyleSheet.create({});
