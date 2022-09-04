import { View, Text, Switch, StyleSheet } from "react-native";
import { Cell } from "react-native-tableview-simple";
import { useDarkThemeContext } from "../context/themeContext";

export const ThemeSettings = () => {
   const { darkTheme, setDarkTheme } = useDarkThemeContext();
   return (
      <Cell
         cellContentView={
            <View style={styles.tableCell}>
               <Text>Dark Theme</Text>
               <Switch onValueChange={setDarkTheme} value={darkTheme} />
            </View>
         }
      />
   );
};

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
