// import components from react native
import { SafeAreaView, View, Text, StyleSheet, Image } from "react-native";

const styles = StyleSheet.create({
    wrapper: {
        height: "100%",
        flex: 1,
        margin: 10
    },
    favoriteTeams: {
        justifyContent: "center",
        alignItems: "center"
    },
    title: {
        fontSize: 15,
        textAlign: "center"
    },
    logoWrapper: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "60%"
    },
    logoContainer: {
        width: "32%",
    },
    logoImage: {
        width: "90%",
        height: "29%",
    },
})

const LogoWrapper = ({ children }) => {
    return <View style={styles.logoWrapper}>
        {children}
    </View>
}

const DisplayLogo = ({logoURI, title}) => {
    return <View style={styles.logoContainer}>
        <Image source={logoURI} style={styles.logoImage}/>
        <Text style={styles.title}>{title}</Text>
    </View>
}

const FavoriteTeams = () => {
    return <View style={styles.favoriteTeams}>
        <Text style={styles.title}>Favorite teams</Text>
        <LogoWrapper>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
        </LogoWrapper>
    </View>
};

const FavoriteLeagues = () => {
    return <View style={styles.favoriteTeams}>
        <Text style={styles.title}>Favorite Leagues</Text>
        <LogoWrapper>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
            <DisplayLogo logoURI={require("../assets/man-city-logo.jpeg")} title="Manchester city"/>
        </LogoWrapper>
    </View>
};

const Profile = ({ navigation }) => {
   return (
    <SafeAreaView style={styles.wrapper}>
        <Text>Logo goes here</Text>
        {/*  Logo to be placed here  */}
        {/*  favorite teams to be placed here  */}
        <FavoriteTeams />
        {/*  favorite leagues to be placed here  */}
        <FavoriteLeagues />
    </SafeAreaView>
   );
};

export default Profile;
