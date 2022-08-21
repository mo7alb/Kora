// import custom components
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
// import hooks
import { useCallback, useState } from "react";

export default function LoginForm() {
   const [username, changeUsername] = useState("");
   const [password, changePassword] = useState("");

   const usernameChangeEvent = useCallback(text => {
      changeUsername(text);
   }, []);

   const passwordChangeEvent = useCallback(text => {
      changePassword(text);
   }, []);

   const handleLogin = useCallback(() => {
      console.log(username, password);
      // make request to api
      changeUsername("");
      changePassword("");
      console.log("login");
   }, [username, password]);

   return (
      <View style={styles.container}>
         <CustomInput label="Username" textChangeEvent={usernameChangeEvent} />
         <CustomInput
            label="Password"
            secure={true}
            textChangeEvent={passwordChangeEvent}
         />
         <CustomButton label="Login" pressEvent={handleLogin} />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: Constants.statusBarHeight,
      backgroundColor: "#ecf0f1",
      padding: 8,
   },
});
