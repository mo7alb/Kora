// import Components from react native
import {View, Text, StyleSheet, SafeAreaView, Switch, TextInput} from "react-native";
import { TableView, Section, Cell } from "react-native-tableview-simple";
import CustomButton from "../components/CustomButton";

const styles = StyleSheet.create({
   container: {
      flex: 1,
      height: "100%",
   },
   settingsTable: {
      marginVertical: 10
   },
   tableCell: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "nowrap",
      width: "100%",
      alignItems: "center",
      justifyContent: "space-between",
   },

});

const Settings = ({ navigation }) => {
   return (
      <SafeAreaView style={styles.container}>
         <Text>Logo to be displayed here</Text>
         <TableView>
            <Section header="Theme settings">
               <Cell
                  cellContentView={
                     <View style={styles.tableCell}>
                        <Text>Dark Theme</Text>
                        <Switch />
                     </View>
                  }
               />
            </Section>
            <Section header="Password settings">
               <Cell
                  cellContentView={
                     <View style={[styles.tableCell, { flexWrap: "wrap"}]}>
                        <Text>Old password</Text>
                        <TextInput secureTextEntry/>
                        <Text>New password</Text>
                        <TextInput secureTextEntry/>
                        <Text>Confirm password</Text>
                        <TextInput secureTextEntry/>
                        <CustomButton style="grey" content="Change Password" size="md"/>
                     </View>
                  }
               />
            </Section>
            <Section header="Account settings">
               <Cell
                   cellContentView={
                      <View style={[styles.tableCell, { flexDirection: "column"} ]}>
                         <CustomButton
                             size="lg"
                             style="coral"
                             content="Logout"
                             additionalStyles={{ padding: 0, margin: 0 }}
                         />
                         <CustomButton
                             size="lg"
                             style="coral"
                             content="Delete account"
                             additionalStyles={{ padding: 0, margin: 0 }}
                         />
                      </View>
                   }
               />
            </Section>
         </TableView>
      </SafeAreaView>
   );
};

export default Settings;
