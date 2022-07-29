import { SafeAreaView } from "react-native";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Profile from "./screens/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator>
            <Stack.Screen
               name="Home"
               component={Home}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Settings"
               component={Settings}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Login"
               component={Login}
               options={{ headerShown: false }}
            />
            <Stack.Screen
               name="Profile"
               component={Profile}
               options={{ headerShown: false }}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}
