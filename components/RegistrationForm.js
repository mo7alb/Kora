import { StyleSheet, Text, View } from "react-native";
import { useCallback, useState } from "react";
import useForm from "../hooks/useForm";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

const RegistrationForm = () => {
   const [state, updateState, resetFormData] = useForm({
      name: "",
      username: "",
      email: "",
      password: "",
   });

   const handleRegistration = useCallback(() => {
      console.log("registering");
      console.log("registeration data ===> ", state);

      resetFormData();
   }, [state]);

   return (
      <View style={styles.container}>
         {/* Input field for name */}
         <CustomInput
            label="Name"
            value={state.name}
            textChangeEvent={useCallback(text => updateState("name", text), [])}
         />
         {/* Input field for username */}
         <CustomInput
            label="Username"
            value={state.username}
            textChangeEvent={useCallback(
               text => updateState("username", text),
               []
            )}
         />
         {/* Input field for email */}
         <CustomInput
            label="Email"
            value={state.email}
            textChangeEvent={useCallback(text => {
               updateState("email", text);
            }, [])}
         />
         {/* Input field for password */}
         <CustomInput
            label="Password"
            secure={true}
            value={state.password}
            textChangeEvent={useCallback(text => {
               updateState("password", text);
            }, [])}
         />
         {/* Submit button */}
         <CustomButton
            size="lg"
            style="dark"
            content="Register User"
            pressEvent={handleRegistration}
            additionalStyles={styles.btnExt}
         />
      </View>
   );
};

export default RegistrationForm;

const styles = StyleSheet.create({
   container: {
      display: "flex",
      alignItems: "center",
   },
   btnExt: {
      marginVertical: 10,
   },
});
