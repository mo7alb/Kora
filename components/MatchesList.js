import { Text, View } from "react-native";
// import React, { useEffect } from "react";
// import { MatchContext } from "../context/matchesContext";
// import axios from "axios";
import Match from "./Match";

const MatchesList = ({ matches }) => {
   // const { matches, setMatches } = MatchContext();

   // useEffect(() => {
   //    console.log(matches);
   //    console.log("getting matches");
   //    if (matches == null) {
   //       // fetch data from API
   //       // use setMatches to set all the matches
   //       axios("localhost:3000/api/matches");
   //    }
   // }, []);

   return (
        <View>
            <Text>Matches List</Text>
            {
                matches.map(match => <Match key={match.id} match={match}/>)
            }
        </View>
   );
};

export default MatchesList;

// const styles = StyleSheet.create({});
