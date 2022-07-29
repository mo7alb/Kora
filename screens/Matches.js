import { SafeAreaView, Text } from "react-native";
import Navbar from "../components/Navbar";

const Matches = ({ navigation }) => {
   return (
      <SafeAreaView style={{ height: "100%" }}>
         <Text>Matches page works just fine</Text>
         <Navbar navigation={navigation} />
      </SafeAreaView>
   );
};

export default Matches;
