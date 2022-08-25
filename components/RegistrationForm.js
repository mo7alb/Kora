import { StyleSheet, View, Text } from "react-native";
import { useCallback } from "react";
import useForm from "../hooks/useForm";

import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";

import axios from "axios";

const RegistrationForm = ({ navigation }) => {
   const [state, updateState, resetFormData] = useForm({
      name: "",
      username: "",
      email: "",
      password: "",
      error: "",
   });

   const handleRegistration = useCallback(async () => {
      if (state.name.length < 3) {
         updateState("error", "Name is too short");
         return;
      } else if (state.username.length < 3) {
         updateState("error", "Username is too short");
         return;
      } else if (state.email.length < 5) {
         updateState("error", "Email is too short");
         return;
      }

      let api_url = "http://localhost:3000/api/auth/register";

      try {
         let respones = await axios.post(api_url, state);
         resetFormData();
         if (respones.status == 201) {
            navigation.navigate("Login");
         }
      } catch (error) {
         if (error.request.status === 400) {
            updateState("error", "Username or email already exists");
         } else {
            updateState("error", "Unable to reach server");
         }
      }
   }, [state]);

   return (
      <View style={styles.container}>
         {state.error !== "" ? (
            <>
               <Text style={styles.errorTxt}>Error</Text>
               <Text style={styles.errorTxt}>{state.error}</Text>
            </>
         ) : (
            <></>
         )}
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
   errorTxt: {
      color: "red",
      fontWeight: "bold",
   },
});
