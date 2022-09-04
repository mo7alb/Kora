import { useState } from "react";
import * as SecureStore from "expo-secure-store";

function useToken() {
   const [token, setToken] = useState(null);

   const setNewToken = async token => {
      let newToken = await SecureStore.setItemAsync(
         "token",
         response.data.token
      );
      setToken(newToken);
   };

   const getToken = async () => {
      let fetchedToken = await SecureStore.getItemAsync("token");
      if (fetchedToken !== token) setToken(fetchedToken);

      return token;
   };

   const destroyToken = async () => {
      await SecureStore.setItemAsync("token", "");
      setToken(null);
   };

   return { setNewToken, getToken, destroyToken };
}
