// import Components from react native
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import { AccountSettings } from "../components/AccountSettings";
import Logo from "../components/Logo";
import { PasswordSettings } from "../components/PasswordSettings";
import { useProfileContext } from "../context/profileContext";
import Constants from "expo-constants";

const Settings = ({ navigation }) => {
   const { profile } = useProfileContext();
   const [userProfile, setUserProfile] = useState(profile);

   useEffect(() => {
      setUserProfile(profile);
   }, [profile]);

   return (
      <SafeAreaView style={styles.container}>
         <Logo />
         {userProfile == null && (
            <Text style={{ textAlign: "center" }}>Login to view settings</Text>
         )}
         {userProfile != null && (
            <TableView>
               <Section header="Password settings">
                  <PasswordSettings />
               </Section>
               <Section header="Account settings">
                  <AccountSettings navigation={navigation} />
               </Section>
            </TableView>
         )}
      </SafeAreaView>
   );
};

export default Settings;

export const styles = StyleSheet.create({
   container: {
      height: "100%",
      width: "100%",
      marginTop: Constants.statusBarHeight + 15,
   },
});
