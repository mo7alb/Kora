// import Components from react native
import {
   SafeAreaView,
   ScrollView,
   View,
   Text,
   Button,
   StyleSheet,
} from "react-native";
import { useState, useCallback, useEffect } from "react";
import MatchesList from "../components/MatchesList";

const styles = StyleSheet.create({
   container: {
      height: "100%",
      flex: 1,
   },
   homeMatches: {
      backgroundColor: "red",
      justifyContent: "center",
      alignItems: "center",
   }
});

const HomeMatches = () => {
   const [matches, setMatches] = useState([]);

   useEffect(() => {
      if (matches !== []) {
         let teams = ["Manchester city", "Manchester United", "Liverpool", "West ham", "Spurs", "Chelsea"]
         setMatches(prev => {
            let previousMatches = [...prev]
            for (let i = 0; i < 15; i++) {
               let match = {
                  id: i,
                  homeTeam: {
                     team: teams[Math.floor(Math.random() * teams.length)],
                     score: Math.ceil(Math.random() * 10)
                  },
                  awayTeam: {
                     team: teams[Math.floor(Math.random() * teams.length)],
                     score: Math.ceil(Math.random() * 10)
                  }
               }
               previousMatches.push(match)
            }
            return previousMatches;
         })
      }
   }, [])

   return (
       <SafeAreaView style={{ width: "100%" }}>
         <View style={styles.homeMatches}>
            <Text>Hey I am Logged in, give me some matches</Text>
            {
               matches != [] &&
               <MatchesList matches={matches} />
            }
         </View>
       </SafeAreaView>
   )
}

const NotAuthenticated = ({ navigation }) => {
   return (
      <View>
         <Text>Hey I am not logged in, convince me to log in</Text>
         <Button title="Login" onPress={useCallback(() => navigation.navigate("Login"),[])}/>
      </View>
   )
}

const Home = ({ navigation }) => {
   const [auth, setAuth] = useState(null);

   const authenticate = useCallback(() => setAuth(prev => {
      if (prev === null) return true;
      else if (prev === true) return null;
   }), [])

   return (
      <SafeAreaView style={styles.container}>
         <ScrollView>
            <View>
               <Text>The home screen works just fine</Text>
               <Button title="Authenticate" onPress={authenticate}/>
               {/* All favorite matches to be displayed here */}
               {/* if not logged in, encourage user to log in  */}
               { auth != null && <HomeMatches /> }
               { auth == null && <NotAuthenticated navigation={navigation}/> }
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default Home;
