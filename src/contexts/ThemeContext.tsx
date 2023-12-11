import React from "react";


const ThemeContext = React.createContext({
    theme: null,
    setTheme: null,
    setReady: null,
});

export default ThemeContext;