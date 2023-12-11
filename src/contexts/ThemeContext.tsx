import React from "react";


const ThemeContext = React.createContext({
    theme: null,
    setTheme: (val: "light" | "dark") => { },
    ready: null,
    setReady: (val: boolean) => { },
});

export default ThemeContext;