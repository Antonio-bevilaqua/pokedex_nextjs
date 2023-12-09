"use client";
import localFont from 'next/font/local';
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { useState } from "react";
import ThemeContext from "../src/contexts/ThemeContext";
import Header from "../src/components/Header/Header";
import background from '../assets/images/textura-background.png'

const pokemonSolid = localFont({
    src: '../assets/fonts/Pokemon Solid.ttf',
    variable: '--font-pokemon-solid'
});
const pokemonHollow = localFont({
    src: '../assets/fonts/Pokemon Hollow.ttf',
    variable: '--font-pokemon-hollow'
});

const openSans = Open_Sans({
    weight: '400',
    subsets: ['latin'],
    variable: "--open-sans"
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [theme, setTheme] = useState("dark");

    return (
        <ThemeContext.Provider value={{
            theme,
            setTheme
        }}>
            <html lang="en" className={theme === "dark" ? "dark" : ""}>
                <body className={`${pokemonHollow.variable} ${pokemonSolid.variable} ${openSans.variable} bg-gray-200 dark:bg-gray-900`} style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: 'center center',
                }}>
                    <Header />
                    <div className="flex w-full justify-center">
                        <div className="w-full bg-gray-500/40 dark:bg-gray-900/40 h-full flex justify-center" >
                            <div className="w-full lg:max-w-screen-lg sm:max-w-screen-sm bg-gray-200 dark:bg-gray-700/80 min-h-screen rounded-xl p-4">
                                {children}
                            </div>
                        </div>
                    </div>
                </body>
            </html>
        </ThemeContext.Provider>
    )
}