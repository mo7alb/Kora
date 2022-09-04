import { View, StyleSheet, Alert } from "react-native";
import { useState, useCallback } from "react";
import { Cell } from "react-native-tableview-simple";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

/**
 * Settings for changing user password
 */
export const PasswordSettings = () => {
   const [state, setState] = useState({
      old_password: "",
      new_password: "",
      confirm_password: "",
   });

   const handleChangePassword = useCallback(async () => {
      if (
         state.confirm_password == "" ||
         state.new_password == "" ||
         state.old_password == ""
      ) {
         Alert.alert("Old, new and confirm passwords are required");
         return;
      }

      const url = "http://localhost:3000/api/auth/change-password";
      const token = await SecureStore.getItemAsync("token");

      axios
         .post(url, state, {
            headers: { authorization: `token ${token}` },
         })
         .then(response => {
            if (response.status == 200) {
               Alert.alert("Password changed successfully");
               setState({
                  old_password: "",
                  new_password: "",
                  confirm_password: "",
               });
            }
         })
         .catch(err => console.error(err));
   }, [state]);

   return (
      <Cell
         cellContentView={
            <View style={[styles.tableCell, { flexWrap: "wrap" }]}>
               <CustomInput
                  label="Old password"
                  secure={true}
                  value={state.old_password}
                  textChangeEvent={useCallback(
                     text =>
                        setState(prev => ({ ...prev, old_password: text })),
                     []
                  )}
               />
               <CustomInput
                  label="New password"
                  secure={true}
                  value={state.new_password}
                  textChangeEvent={useCallback(
                     text =>
                        setState(prev => ({ ...prev, new_password: text })),
                     []
                  )}
               />
               <CustomInput
                  label="Confirm password"
                  secure={true}
                  value={state.confirm_password}
                  textChangeEvent={useCallback(
                     text =>
                        setState(prev => ({ ...prev, confirm_password: text })),
                     []
                  )}
               />
               <View style={styles.btnContainer}>
                  <CustomButton
                     style="dark"
                     content="Change Password"
                     size="md"
                     pressEvent={handleChangePassword}
                  />
               </View>
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
      paddingBottom: 15,
   },
   textInput: {
      margin: 15,
      height: 40,
      width: "50%",
      borderColor: "#6d6d6e",
      borderRadius: 20,
      borderWidth: 1,
      paddingLeft: 15,
   },
   btnContainer: {
      width: "100%",
      display: "flex",
      alignItems: "center",
   },
});
