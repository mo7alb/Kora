import { SafeAreaView, Text } from "react-native";
import MatchesList from "../components/MatchesList";
import { MatchesProvider } from "../context/matchesContext";

const Matches = ({ navigation }) => {
   return (
      <MatchesProvider>
         <SafeAreaView style={{ height: "100%" }}>
            <Text>Matches page works just fine</Text>
            {/* <MatchesList /> */}
         </SafeAreaView>
      </MatchesProvider>
   );
};

export default Matches;
