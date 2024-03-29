import {
   createContext,
   useContext,
   useState,
   useCallback,
   useEffect,
} from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

// create new context for list of leagues
const LeaguesContext = createContext();

const api_url = "http://localhost:3000/api/leagues/";
const getToken = async () => await SecureStore.getItemAsync("token");

/**
 * React context provider to fetch and store the list of leagues
 */
function LeaguesProvider({ children }) {
   const [leagues, setLeagues] = useState(null);
   const [error, setError] = useState(null);

   // fetch list of leagues
   useEffect(() => {
      // return nothing if the leagues have been fetched already
      if (leagues != null) return;

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
               setLeagues(response.data);
            })
            .catch(error => setError(error));
      });
   }, [leagues]);

   // get a league by id
   const getLeague = useCallback(
      id => {
         // return nothing if the leagues have been fetched already
         if (leagues == null) return;

         const res = leagues.find(league => league._id == id);
         return res;
      },
      [leagues]
   );

   return (
      <LeaguesContext.Provider value={{ leagues, error, getLeague }}>
         {children}
      </LeaguesContext.Provider>
   );
}

/**
 * Helper function to simplify using of the context
 */
function useLeaguesContext() {
   return useContext(LeaguesContext);
}

export { LeaguesProvider, useLeaguesContext };
