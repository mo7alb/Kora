import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import { useProfileContext } from "../context/profileContext";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function LoginForm({ navigation }) {
   const { setProfile } = useProfileContext();

   const [state, setState] = useState({
      username: "",
      password: "",
   });

   const handleLogin = useCallback(async () => {
      let api_url = "http://localhost:3000/api/auth/login";

      if (state.username == "") {
         Alert.alert("Username is required");
         return;
      } else if (state.password == "") {
         Alert.alert("Password is required");
         return;
      }

      try {
         let response = await axios.post(api_url, {
            username: state.username,
            password: state.password,
         });
         console.log(response);
         let data = await response.data;
         await SecureStore.setItemAsync("token", data.token);
         setProfile(data.user);
         console.log(await SecureStore.getItemAsync("token"));
         navigation.navigate("Home");
      } catch (error) {
         Alert.alert("Error", error);
      }
   }, [state]);

   return (
      <View style={styles.container}>
         <CustomInput
            label="Username"
            value={state.username}
            textChangeEvent={useCallback(
               text => setState(prev => ({ ...prev, username: text })),
               []
            )}
         />
         <CustomInput
            label="Password"
            secure={true}
            value={state.password}
            textChangeEvent={useCallback(
               text => setState(prev => ({ ...prev, password: text })),
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
