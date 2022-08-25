import { StyleSheet, View } from "react-native";

// import custom components
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// import hooks
import { useCallback, useState } from "react";

export default function LoginForm() {
   const [username, changeUsername] = useState("");
   const [password, changePassword] = useState("");

   const handleLogin = useCallback(() => {
      console.log(username, password);
      // make request to api

      changeUsername("");
      changePassword("");
      console.log("login");
   }, [username, password]);

   return (
      <View style={styles.container}>
         <CustomInput
            label="Username"
            textChangeEvent={useCallback(text => {
               changeUsername(text);
            }, [])}
         />
         <CustomInput
            label="Password"
            secure={true}
            textChangeEvent={useCallback(text => {
               changePassword(text);
            }, [])}
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
