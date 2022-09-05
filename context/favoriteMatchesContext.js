import {
   createContext,
   useContext,
   useState,
   useCallback,
   useEffect,
} from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

// create new context for favorite matches
const favoriteMatchesContext = createContext();

const api_url = "http://localhost:3000/api/matches/favorite/";
const getToken = async () => await SecureStore.getItemAsync("token");

/**
 * React context to fetch and store the favorite matches of a user
 */
function FavoriteMatchesProvider({ children }) {
   const [matches, setMatches] = useState(null);
   const [error, setError] = useState(null);

   // fetch data everytime components gets mounted
   useEffect(() => {
      // return nothing if the matches have been fetched already
      if (matches != null) return;

      // fetch the token
      getToken().then(token => {
         // make a get request to the backend api
         axios
            .get(api_url, {
               headers: {
                  Authorization: `token ${token}`,
               },
            })
            .then(response => {
               setMatches(response.data);
            })
            .catch(error => {
               setError(error);
            });
      });
   }, []);

   return (
      <favoriteMatchesContext.Provider value={{ matches, error }}>
         {children}
      </favoriteMatchesContext.Provider>
   );
}

/**
 * Helper function to simplify using of the context
 */
function useFavoriteMatchContext() {
   return useContext(favoriteMatchesContext);
}

export { FavoriteMatchesProvider, useFavoriteMatchContext };
