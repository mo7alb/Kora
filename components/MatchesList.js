import { Text, View } from "react-native";
// import React, { useEffect } from "react";
// import { MatchContext } from "../context/matchesContext";
// import axios from "axios";
import Match from "./Match";

const MatchesList = ({ matches }) => {
   return (
      <View>
         <Text>Matches List</Text>
         {matches.map(match => (
            <Match key={match.id} match={match} />
         ))}
      </View>
   );
};

export default MatchesList;

// const styles = StyleSheet.create({});
