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
import BackToTop from '@/components/BackToTop/BackToTop';
import { usePathname } from 'next/navigation';
import favicon from "@/assets/pokemon_fav.png";

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
    const [actualTheme, setActualTheme] = useState(null);
    const [ready, setReady] = useState(true);
    const [loaded, setLoaded] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        let ntheme = localStorage.getItem("theme");
        if (ntheme === null || ntheme === "null") ntheme = "dark";
        setActualTheme(ntheme);
        if (!loaded) setLoaded(true);
    }, []);

    const setTheme = (val: "light" | "dark") => {
        setActualTheme(val);
        localStorage.setItem("theme", val);
    }

    useEffect(() => {
        if (!ready) setReady(true);
    }, [pathname]);

    return (
        <ThemeContext.Provider value={{
            theme: actualTheme,
            setTheme,
            ready,
            setReady,
        }}>
            <html lang="en" className={actualTheme === "dark" ? "dark" : ""}>
                <head>
                    <title>PokéDB</title>
                    <link rel="icon" type="image/png" href={favicon.src} />
                </head>
                <body className={`${pokemonHollow.variable} ${pokemonSolid.variable} ${openSans.variable} bg-gray-200 dark:bg-gray-900`} style={{
                    backgroundImage: `url(${background.src})`,
                    backgroundRepeat: "repeat",
                    backgroundPosition: 'center center',
                }}>

                    <Preloader ready={ready && loaded} />
                    <PokemonListContext>
                        <Header />

                        <div className="flex w-full justify-center">
                            <div className="w-full bg-gray-500/40 dark:bg-gray-900/40 h-full flex justify-center" >
                                <div className="w-full lg:max-w-screen-lg sm:max-w-screen-sm bg-gray-200 dark:bg-gray-700/80 min-h-screen rounded-xl p-4 pt-48 mt-10 min-[300px]:pt-20 min-[300px]:mt-2">
                                    {children}
                                </div>
                            </div>
                        </div>

                        <BackToTop />
                    </PokemonListContext>
                </body>
            </html>
        </ThemeContext.Provider>
    )
}