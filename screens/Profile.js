// import components from react native
import { SafeAreaView, View, Text } from "react-native";
import Navbar from "../components/Navbar";

const Profile = ({ navigation }) => {
   return (
      <SafeAreaView style={{ height: "100%" }}>
         <Text>The profile page works fine</Text>
         <Navbar navigation={navigation} />
      </SafeAreaView>
   );
};

export default Profile;
