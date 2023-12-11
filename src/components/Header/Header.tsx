import React from 'react'
import Link from '@/components/Link/Link';
import ThemeSwitcher from '@/components/Header/ThemeSwitcher/ThemeSwitcher';
import Searchbar from '@/components/Header/Searchbar/Searchbar';
import Navbar from '@/components/Header/Navbar/Navbar';

const Header = () => {

    return (
        <header className={`flex flex-col w-full bg-gray-300 dark:bg-gray-900 justify-center items-center fixed top-0 border-solid border-b-2 border-gray-600 dark:border-sky-200 z-50`}>
            <div className="flex justify-between align-middle h-16 items-center w-full max-w-screen-xl pl-4 pr-4 lg:pr-0 lg:pl-0">
                <Link href="/" className='text-amber-400 transition-all hover:text-amber-500 focus-within:text-amber-500 focus-visible:text-amber-500 focus-within:outline-none focus-visible:outline-none text-xl sm:text-3xl font-pokesolid text-stroke-2 pb-3'>
                    PokéDB
                </Link>
                <div className="flex gap-2 items-center">
                    <Searchbar className="hidden min-[300px]:flex" />
                    <ThemeSwitcher className="hidden min-[300px]:flex" />
                </div>
            </div>
            <Navbar />
        </header>
    )
}

export default Header