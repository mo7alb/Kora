import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useEffect } from "react";
import { useLeaguesContext } from "../context/LeaguesContext";
import { TableView } from "react-native-tableview-simple";
import League from "../components/League";
import Logo from "../components/Logo";
import Constants from "expo-constants";

/**
 * Screen to display a list of leagues and their matches
 */
const Matches = () => {
   const { leagues, error, fetchLeagues } = useLeaguesContext();

   useEffect(() => fetchLeagues(), []);

   return (
      <SafeAreaView style={styles.container}>
         <Logo />

         <View style={styles.componentContainer}>
            {error && <Text>An error occurred, try again later</Text>}
            {!error && leagues && (
               <>
                  <ScrollView style={styles.scrollViewStyles}>
                     <TableView>
                        {leagues.map(league => (
                           <League key={league._id} league={league} />
                        ))}
                     </TableView>
                  </ScrollView>
               </>
            )}
         </View>
      </SafeAreaView>
   );
};

export default Matches;

const styles = StyleSheet.create({
   // styles for the safe area view
   container: {
      height: "100%",
      width: "100%",
      marginTop: Constants.statusBarHeight + 15,
   },
   // styles for the view containing all the components
   componentContainer: {
      height: "80%",
      width: "100%",
      backgroundColor: "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
   },
   // styles for the scoll view used to display leageues and their matches
   scrollViewStyles: { height: "100%", width: "100%" },
});
