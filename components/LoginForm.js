import { Alert, StyleSheet, View } from "react-native";
import { useCallback, useState } from "react";
import { useProfileContext } from "../context/profileContext";
import { useToken } from "../hooks/useToken";
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

      const data = { username: state.username, password: state.password };
      axios
         .post(api_url, data)
         .then(async response => {
            if (response.status == 200) {
               const { setToken } = useToke();
               setToken(response.data.token);
               setProfile(response.data.user);
               navigation.navigate("Home");
            }
         })
         .catch(error => {
            if (error.message == "Request failed with status code 400") {
               Alert.alert("Invalid credentials");
               return;
            }
         });
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
