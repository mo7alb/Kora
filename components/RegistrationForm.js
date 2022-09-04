import { StyleSheet, View, Text, Alert } from "react-native";
import { useCallback, useState } from "react";
import CustomButton from "./CustomButton";
import CustomInput from "./CustomInput";
import axios from "axios";

const RegistrationForm = ({ navigation }) => {
   const [state, setState] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
      error: "",
   });

   const handleRegistration = useCallback(async () => {
      if (state.name.length < 3) {
         Alert.alert("error", "Name is too short");
         return;
      } else if (state.username.length < 3) {
         Alert.alert("error", "Username is too short");
         return;
      } else if (state.email.length < 5) {
         Alert.alert("error", "Email is too short");
         return;
      }

      let api_url = "http://localhost:3000/api/auth/register";

      try {
         let respones = await axios.post(api_url, state);
         if (respones.status == 201) {
            navigation.navigate("Login");
         }
      } catch (error) {
         if (error.request.status === 400) {
            Alert.alert("error", "Username or email already exists");
         } else {
            Alert.alert("error", "Unable to reach server");
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
            textChangeEvent={useCallback(
               text => setState(prev => ({ ...prev, name: text })),
               []
            )}
         />
         {/* Input field for username */}
         <CustomInput
            label="Username"
            value={state.username}
            textChangeEvent={useCallback(
               text => setState(prev => ({ ...prev, username: text })),
               []
            )}
         />
         {/* Input field for email */}
         <CustomInput
            label="Email"
            value={state.email}
            textChangeEvent={useCallback(text => {
               setState(prev => ({ ...prev, email: text }));
            }, [])}
         />
         {/* Input field for password */}
         <CustomInput
            label="Password"
            secure={true}
            value={state.password}
            textChangeEvent={useCallback(text => {
               setState(prev => ({ ...prev, password: text }));
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
