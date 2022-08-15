import { createContext, useContext, useState } from "react";

const MatchesContext = createContext();

function MatchesProvider({ children }) {
   const [matches, setMatches] = useState(null);
   return (
      <MatchesContext.Provider value={{ matches, setMatches }}>
         {children}
      </MatchesContext.Provider>
   );
}

function MatchContext() {
   return useContext(MatchesContext);
}

export { MatchesProvider, MatchContext };
