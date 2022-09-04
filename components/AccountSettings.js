import { View, StyleSheet, Alert } from "react-native";
import { Cell } from "react-native-tableview-simple";
import CustomButton from "./CustomButton";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { useProfileContext } from "../context/profileContext";
import { useCallback } from "react";

export const AccountSettings = ({ navigation }) => {
   const { setProfile } = useProfileContext();

   const logout = useCallback(async () => {
      // set profile in profile context to null
      setProfile(null);
      // clear the token
      await SecureStore.setItemAsync("token", "");
      // navigate to home screen
      navigation.navigate("Home");
   }, []);

   /**
    * Function to delete a user
    */
   const deleteAccount = useCallback(async () => {
      const url = "http://localhost:3000/api/auth/";
      const token = await SecureStore.getItemAsync("token");

      let res = await axios.delete(url, {
         headers: {
            authorization: `token ${token}`,
         },
      });
      if (res.status == 204) {
         Alert.alert("Successfully deleted user");
         // set profile in profile context to null
         setProfile(null);
         // clear the token
         await SecureStore.setItemAsync("token", "");
         // navigate to home screen
         navigation.navigate("Home");
      } else if (res.status == 404) {
         Alert.alert("Invalid user");
      } else {
         Alert.alert("An error occurred");
      }
   }, []);

   return (
      <Cell
         cellContentView={
            <View style={[styles.tableCell, { flexDirection: "column" }]}>
               <CustomButton
                  size="lg"
                  style="dark"
                  content="Logout"
                  additionalStyles={{ padding: 0, marginTop: 10 }}
                  pressEvent={logout}
               />
               <CustomButton
                  size="lg"
                  style="dark"
                  content="Delete account"
                  additionalStyles={{ padding: 0, marginVertical: 10 }}
                  pressEvent={deleteAccount}
               />
            </View>
         }
      />
   );
};

const styles = StyleSheet.create({
   tableCell: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
   },
});
