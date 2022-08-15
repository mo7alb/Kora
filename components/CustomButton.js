import { TouchableOpacity, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
   btn: {
      borderStyle: "solid",
      borderWidth: 2,
      borderRadius: 20,
      borderColor: "black",
   },
   btnContent: {
      textAlign: "center",
   },
   // styles for a large button
   btnLg: {
      width: "85%",
      paddingVertical: 10,
      borderRadius: 32,
   },
   btnLgContent: { fontSize: 17 },
   // styles for medium button
   btnMd: {
      width: "65%",
      paddingVertical: 6,
   },
   btnMdContent: { fontSize: 14 },
   // styles for small button
   btnSm: {
      width: "37%",
      paddingVertical: 17,
   },
   btnSmContent: { fontSize: 15 },
   // styles for dark button
   btnDark: {
      backgroundColor: "#3F4040",
   },
   btnDarkContent: {
      color: "#C5C5C6",
   },
   // styles for light button
   btnLight: {
      backgroundColor: "#DAFFFF",
   },
   btnLightContent: {
      color: "#000",
   },
   // styles for coral button
   btnCoral: {
      backgroundColor: "#FF7F50",
   },
   btnCoralContent: {
      color: "#008CAF",
   },
   // styles for grey button
   btnGrey: {
      backgroundColor: "#9E9E9E",
   },
   btnGreyContent: {
      color: "#000",
   },
   // styles for blue button
   btnBlue: {
      backgroundColor: "#6989F8",
   },
   btnBlueContent: {
      color: "#000",
   },
});

const CustomButton = ({
   content,
   pressEvent,
   size = "sm",
   style = "light",
   additionalStyles = {},
   children,
}) => {
   return (
      <TouchableOpacity
         onPress={pressEvent}
         style={[
            styles.btn,
            size == "lg"
               ? styles.btnLg
               : size == "md"
               ? styles.btnMd
               : size == "sm"
               ? styles.btnSm
               : styles.btnMd,
            style == "dark"
               ? styles.btnDark
               : style == "light"
               ? styles.btnLight
               : style == "grey"
               ? styles.btnGrey
               : style == "coral"
               ? styles.btnCoral
               : style == "blue"
               ? styles.btnBlue
               : styles.btnLight,
            additionalStyles,
         ]}
      >
         {children && children}
         {content && (
            <Text
               style={[
                  styles.btnContent,
                  size == "lg"
                     ? styles.btnLgContent
                     : size == "md"
                     ? styles.btnMdContent
                     : size == "sm"
                     ? styles.btnSmContent
                     : styles.btnMdContent,
                  style == "dark"
                     ? styles.btnDarkContent
                     : style == "light"
                     ? styles.btnLightContent
                     : style == "grey"
                     ? styles.btnGreyContent
                     : style == "coral"
                     ? styles.btnCoralContent
                     : style == "blue"
                     ? styles.btnBlueContent
                     : styles.btnLightContent,
               ]}
            >
               {content}
            </Text>
         )}
      </TouchableOpacity>
   );
};

export default CustomButton;
