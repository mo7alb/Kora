import { createContext, useContext, useState } from "react";

// create a new context for the profile
const profileContext = createContext();

/**
 * Provider to profile the profile and set profile to the whole app
 */
function ProfileProvider({ children }) {
   const [profile, setProfile] = useState(null);

   return (
      <profileContext.Provider value={{ profile, setProfile }}>
         {children}
      </profileContext.Provider>
   );
}

/**
 * Helper funtion to simplify use of the context
 */
function useProfileContext() {
   return useContext(profileContext);
}

export { ProfileProvider, useProfileContext };
