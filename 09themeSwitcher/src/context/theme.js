import { createContext, useContext } from "react";


//you can  pass default values like when context is made what values should already be there, so variable and methods both can be given
export const ThemeContext = createContext(
    //since we want light theme by default
    {
        themeMode: "light",
        darkTheme: () => { },
        lightTheme: () => { },
        
    }
)
export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}