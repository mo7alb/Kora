import { createContext, useContext, useEffect, useState } from "react";

const profileContext = createContext();

function ProfileProvider({ children }) {
   const [profile, setProfile] = useState(null);

   return (
      <profileContext.Provider value={{ profile, setProfile }}>
         {children}
      </profileContext.Provider>
   );
}

function useProfileContext() {
   return useContext(profileContext);
}

export { ProfileProvider, useProfileContext };
