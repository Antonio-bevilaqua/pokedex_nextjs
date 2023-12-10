"use client";
import React, { useContext } from 'react'
import ThemeContext from '../src/contexts/ThemeContext';
import imageNotFound from "../assets/images/404.png";
import imageNotFoundDark from "../assets/images/404dark.png";
import Link from 'next/link';

const Error = ({
    error,
    statusCode,
}: {
    error: Error & { digest?: string }
    statusCode?: string | null
}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-2xl text-gray-600 dark:text-gray-400">
            <h3 className="text-4xl">Erro!</h3>
            <div className="container code relative flex w-full justify-center items-center pt-8 pb-8 gap-4">
                <img src={theme === "dark" ? imageNotFoundDark.src : imageNotFound.src} />
                <div className="pr-4 border-solid border-l-2 border-gray-600 dark:border-sky-200 pl-4 text-center">
                    <h1 className="text-9xl font-extrabold">{statusCode ?? "Ops..."}</h1>
                    <span>{error.message}</span>
                </div>
            </div>
            <Link href="/" className="text-sky-600 dark:text-sky-200 hover:opacity-80 transition-opacity mt-10">Voltar para a HOME</Link>
        </div>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error