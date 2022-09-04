// import screen components
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import Matches from "./screens/Matches";
import Register from "./screens/Register";

// import navigation related
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import Icon component
import Icon from "react-native-vector-icons/Ionicons";

// import context provider
import { ThemeProvider } from "./context/themeContext";
import { ProfileProvider } from "./context/profileContext";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const IndexStackScreens = () => (
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

export default function App() {
   return (
      <ThemeProvider>
         <ProfileProvider>
            <NavigationContainer>
               <Stack.Navigator>
                  <Stack.Screen
                     name="Index"
                     component={IndexStackScreens}
                     options={{ headerShown: false }}
                  />
                  <Stack.Screen name="Login" component={Login} />
                  <Stack.Screen name="Register" component={Register} />
               </Stack.Navigator>
            </NavigationContainer>
         </ProfileProvider>
      </ThemeProvider>
   );
}
