import { View, Text, StyleSheet, TextInput } from "react-native";

const CustomInput = ({ label, secure = false, textChangeEvent }) => (
   <View style={styles.wrapper}>
      <Text style={styles.lable}>{label}</Text>
      <TextInput
         style={styles.input}
         secureTextEntry={secure}
         onChangeText={textChangeEvent}
      />
   </View>
);

export default CustomInput;

const styles = StyleSheet.create({
   wrapper: {
      marginTop: 15,
      display: "flex",
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
   },
   lable: {
      fontSize: 16,
      width: "40%",
   },
   input: {
      borderWidth: 1,
      borderRadius: 15,
      paddingVertical: 7,
      paddingHorizontal: 15,
      width: "60%",
   },
});
