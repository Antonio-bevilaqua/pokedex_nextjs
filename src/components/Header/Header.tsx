import React from 'react'
import Link from 'next/link';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

const Header = () => {

    return (
        <header className={`flex w-full bg-gray-300 dark:bg-gray-900 justify-center align-middle h-14 pl-4 pr-4 fixed top-0 border-solid border-b-2 border-gray-600 dark:border-sky-200 z-50`}>
            <div className="flex justify-between align-middle items-center w-full max-w-screen-xl pl-4 lg:pl-0 pr-4 lg:pr-0">
                <Link href="/" className='text-amber-400 transition-all hover:text-amber-500 focus-within:text-amber-500 focus-visible:text-amber-500 focus-within:outline-none focus-visible:outline-none text-3xl font-pokesolid text-stroke-2 pb-3'>PokéDB</Link>
                <ThemeSwitcher />
            </div>
        </header>
    )
}

export default Header