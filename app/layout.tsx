"use client";
import localFont from 'next/font/local';
import { Open_Sans } from "next/font/google";
import "../globals.css";
import { useEffect, useState } from "react";
import ThemeContext from "../src/contexts/ThemeContext";
import Header from "../src/components/Header/Header";
import background from '../assets/images/textura-background.png'
import Preloader from '../src/screens/Preloader/Preloader';
import PokemonListContext from '../src/contexts/PokemonListContext';
import CacheStoringService from '../src/services/cache/CacheStoringService';
import BackToTop from '../src/components/BackToTop/BackToTop';

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
    const [theme, setTheme] = useState(null);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        let ntheme = localStorage.getItem("theme");
        if (ntheme === null || ntheme === "null") ntheme = "dark";
        setTheme(ntheme);
    }, [])

    useEffect(() => {
        if (theme !== null) {
            try {
                localStorage.setItem("theme", theme);
                setReady(true);
            } catch (error) {
                console.log(error);
            }
        }
    }, [theme]);

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

                    <Preloader ready={ready} />
                    <PokemonListContext>
                        <Header />

                        {ready && (
                            <div className="flex w-full justify-center">
                                <div className="w-full bg-gray-500/40 dark:bg-gray-900/40 h-full flex justify-center" >
                                    <div className="w-full lg:max-w-screen-lg sm:max-w-screen-sm bg-gray-200 dark:bg-gray-700/80 min-h-screen rounded-xl p-4 pt-14">
                                        {children}
                                    </div>
                                </div>
                            </div>
                        )}

                        <BackToTop />
                    </PokemonListContext>
                </body>
            </html>
        </ThemeContext.Provider>
    )
}