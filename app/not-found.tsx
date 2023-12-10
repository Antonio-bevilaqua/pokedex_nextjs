"use client";
import Link from "next/link"
import imageNotFound from "../assets/images/404.png";
import imageNotFoundDark from "../assets/images/404dark.png";
import { useContext } from "react";
import ThemeContext from "../src/contexts/ThemeContext";

const NotFoundPage = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-2xl text-gray-600 dark:text-gray-400">
            <h3 className="text-4xl">Ops... algo de errado ocorreu!</h3>
            <div className="container code relative flex w-full justify-center items-center pt-8 pb-8 gap-4">
                <img src={theme === "dark" ? imageNotFoundDark.src : imageNotFound.src} />
                <div className="pr-4 border-solid border-l-2 border-gray-600 dark:border-sky-200 pl-4 text-center">
                    <h1 className="text-9xl font-extrabold">404</h1>
                    <span>Página não encontrada!</span>
                </div>
            </div>
            <Link href="/" className="text-sky-600 dark:text-sky-200 hover:opacity-80 transition-opacity mt-10">Voltar para a HOME</Link>
        </div>
    )
}

export default NotFoundPage