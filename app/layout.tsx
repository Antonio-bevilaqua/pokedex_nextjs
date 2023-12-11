"use client";
import localFont from 'next/font/local';
import { Open_Sans } from "next/font/google";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import ThemeContext from "@/contexts/ThemeContext";
import Header from "@/components/Header/Header";
import background from '@/assets/images/textura-background.png'
import Preloader from '@/screens/Preloader/Preloader';
import PokemonListContext from '@/contexts/PokemonListContext';
import CacheStoringService from '@/services/cache/CacheStoringService';
import BackToTop from '@/components/BackToTop/BackToTop';

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
                                    <div className="w-full lg:max-w-screen-lg sm:max-w-screen-sm bg-gray-200 dark:bg-gray-700/80 min-h-screen rounded-xl p-4 pt-48 mt-10 min-[300px]:pt-20 min-[300px]:mt-2">
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