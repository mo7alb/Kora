import { View, Text, TextInput, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";
import CustomButton from "./CustomButton";

export const PasswordSettings = () => (
   <Cell
      cellContentView={
         <View style={[styles.tableCell, { flexWrap: "wrap" }]}>
            <Text>Old password</Text>
            <TextInput secureTextEntry />
            <Text>New password</Text>
            <TextInput secureTextEntry />
            <Text>Confirm password</Text>
            <TextInput secureTextEntry />
            <CustomButton style="grey" content="Change Password" size="md" />
         </View>
      }
   />
);

const styles = StyleSheet.create({
   tableCell: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
   },
});
