import { SafeAreaView } from "react-native";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";
import Profile from "./screens/Profile"

export default function App() {
   return (
      <SafeAreaView>
         <Home />
         <Settings />
         <Login />
        <Profile />
      </SafeAreaView>
   );
}
