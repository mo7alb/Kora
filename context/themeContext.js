import { createContext, useContext } from "react";
import useToggle from "../hooks/useToggle";

const darkThemeContext = createContext();

function ThemeProvider({ children }) {
    const [darkTheme, setDarkTheme] = useToggle()

    return (
        <darkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
            {children}
        </darkThemeContext.Provider>
    );
}

function useDarkThemeContext() {
    return useContext(darkThemeContext);
}

export { ThemeProvider, useDarkThemeContext };
