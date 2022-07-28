import { SafeAreaView } from "react-native";
import Home from "./screens/Home";
import Settings from "./screens/Settings";
import Login from "./screens/Login";

export default function App() {
   return (
      <SafeAreaView>
         <Home />
         <Settings />
         <Login />
      </SafeAreaView>
   );
}
