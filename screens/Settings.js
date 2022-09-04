// import Components from react native
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text } from "react-native";
import { Section, TableView } from "react-native-tableview-simple";
import { AccountSettings } from "../components/AccountSettings";
import { PasswordSettings } from "../components/PasswordSettings";
import { ThemeSettings } from "../components/ThemeSettings";
import { useProfileContext } from "../context/profileContext";

const Settings = ({ navigation }) => {
   const { profile } = useProfileContext();
   const [userProfile, setUserProfile] = useState(profile);

   useEffect(() => {
      setUserProfile(profile);
   }, [profile]);

   return (
      <SafeAreaView style={styles.container}>
         <Text>Logo to be displayed here</Text>
         <TableView>
            <Section header="Theme settings">
               <ThemeSettings />
            </Section>
            {userProfile != null && (
               <>
                  <Section header="Password settings">
                     <PasswordSettings />
                  </Section>
                  <Section header="Account settings">
                     <AccountSettings navigation={navigation} />
                  </Section>
               </>
            )}
         </TableView>
      </SafeAreaView>
   );
};

export default Settings;

export const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: "100%",
   },
});
