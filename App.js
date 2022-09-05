// import screen components
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Matches from "./screens/Matches";
import Register from "./screens/Register";
import MatchDetails from "./screens/MatchDetails";
import TeamDetails from "./screens/TeamDetails";
import LeagueDetails from "./screens/LeagueDetails";
import PlayerDetails from "./screens/PlayerDetails";

// import navigation related
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon component
import Icon from "react-native-vector-icons/Ionicons";

// import context provider
import { ThemeProvider } from "./context/themeContext";
import { ProfileProvider, useProfileContext } from "./context/profileContext";
import { FavoriteMatchesProvider } from "./context/favoriteMatchesContext";
import { LeaguesProvider } from "./context/LeaguesContext";

import { useEffect, useState } from "react";
import { View, Text } from "react-native";
import * as SecureStore from "expo-secure-store";
import NetInfo from "@react-native-community/netinfo";
import axios from "axios";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const IndexTabScreens = () => (
   <Tab.Navigator
      screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === "Home") {
               iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Matches") {
               iconName = focused
                  ? "game-controller"
                  : "game-controller-outline";
            } else if (route.name === "Profile") {
               iconName = focused ? "person" : "person-outline";
            } else if (route.name === "Settings") {
               iconName = focused ? "settings" : "settings-outline";
            }

            return <Icon name={iconName} size={30} />;
         },
         tabBarActiveTintColor: "coral",
         tabBarInactiveTintColor: "lightblue",
      })}
   >
      <Tab.Screen
         name="Home"
         component={Home}
         options={{ headerShown: false }}
      />
      <Tab.Screen
         name="Matches"
         component={Matches}
         options={{ headerShown: false }}
      />
      <Tab.Screen
         name="Profile"
         component={Profile}
         options={{ headerShown: false }}
      />
      <Tab.Screen
         name="Settings"
         component={Settings}
         options={{ headerShown: false }}
      />
   </Tab.Navigator>
);

const AppNavigationStack = () => {
   const { setProfile } = useProfileContext();
   useEffect(() => {
      const getToken = async () => {
         let token = await SecureStore.getItemAsync("token");
         if (token != undefined) {
            axios
               .get("http:localhost:3000/api/auth", {
                  headers: {
                     authorization: `token ${token}`,
                  },
               })
               .then(response => setProfile(response.data));
         }
      };

      getToken();
   }, []);

   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Index"
               component={IndexTabScreens}
               options={{ headerShown: false }}
            />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="MatchDetails" component={MatchDetails} />
            <Stack.Screen name="TeamDetails" component={TeamDetails} />
            <Stack.Screen name="LeagueDetails" component={LeagueDetails} />
            <Stack.Screen name="PlayerDetails" component={PlayerDetails} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default function App() {
   const [connected, setConnected] = useState(false);
   useEffect(() => {
      const unsubscribe = NetInfo.addEventListener(state => {
         if (connected != state.isConnected) setConnected(state.isConnected);
      });
      return () => {
         unsubscribe();
      };
   }, []);
   if (!connected) {
      return (
         <View
            style={{
               display: "flex",
               justifyContent: "center",
               alignItems: "center",
            }}
         >
            <Text>Connection error, Check your internet connection</Text>
         </View>
      );
   }

   return (
      <ThemeProvider>
         <ProfileProvider>
            <LeaguesProvider>
               <FavoriteMatchesProvider>
                  <AppNavigationStack />
               </FavoriteMatchesProvider>
            </LeaguesProvider>
         </ProfileProvider>
      </ThemeProvider>
   );
}

const hasConnection = () => {
   return new Promise(async (resolve, reject) => {
      try {
         let networkStat = await Network.getNetworkStateAsync();
         if (networkStat.isInternetReachable) resolve(true);

         resolve(true);
      } catch (error) {
         reject(error);
      }
   });
};
