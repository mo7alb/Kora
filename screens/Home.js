// import Components from react native
import { SafeAreaView, StyleSheet } from "react-native";
import { useProfileContext } from "../context/profileContext";
import Logo from "../components/Logo";
import Constants from "expo-constants";
import Authenticated from "../components/Authenticated";
import NotAuthenticated from "../components/NotAuthenticated";
import { useCallback } from "react";

export const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      marginTop: Constants.statusBarHeight + 15,
   },
});

const Home = ({ navigation }) => {
   const { profile } = useProfileContext();

   const navigateToLogin = useCallback(
      () => navigation.navigate("Login"),
      [navigation]
   );

   return (
      <SafeAreaView style={styles.container}>
         <Logo />
         {profile != null && <Authenticated />}
         {profile == null && (
            <NotAuthenticated navigateToLogin={navigateToLogin} />
         )}
      </SafeAreaView>
   );
};

export default Home;
