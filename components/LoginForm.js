import { StyleSheet, View } from "react-native";

// import custom components
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// import hooks
import { useCallback, useState } from "react";
import useForm from "../hooks/useForm";

export default function LoginForm() {
   const [state, updateState, restFormData] = useForm({
      username: "",
      password: "",
   });

   const handleLogin = useCallback(() => {
      console.log("login");
      console.log("login state ===> ", state);
      restFormData();
   }, [state]);

   return (
      <View style={styles.container}>
         <CustomInput
            label="Username"
            value={state.username}
            textChangeEvent={useCallback(
               text => updateState("username", text),
               []
            )}
         />
         <CustomInput
            label="Password"
            secure={true}
            value={state.password}
            textChangeEvent={useCallback(
               text => updateState("password", text),
               []
            )}
         />
         <CustomButton
            content="Login"
            pressEvent={handleLogin}
            size="lg"
            style="dark"
            additionalStyles={styles.btnEtc}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      justifyContent: "center",
      alignItems: "center",
      backfaceVisibility: "visible",
   },
   btnEtc: {
      marginVertical: 17,
   },
});
