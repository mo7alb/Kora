import { View, Text, StyleSheet, TextInput } from "react-native";
import { memo } from "react";

/**
 * A functional component represent a custom text input
 */
const CustomInput = ({
   label,
   secure = false,
   autoCap = "none",
   autoCorrect = false,
   value,
   textChangeEvent,
}) => (
   <View style={styles.wrapper}>
      <Text style={styles.lable}>{label}</Text>
      <TextInput
         style={styles.input}
         secureTextEntry={secure}
         autoCapitalize={autoCap}
         autoCorrect={autoCorrect}
         value={value}
         onChangeText={textChangeEvent}
      />
   </View>
);

export default memo(CustomInput);

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
