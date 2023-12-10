import React, { useContext } from 'react'
import ThemeContext from '../../../contexts/ThemeContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

const ThemeSwitcher = ({ className = "" }: { className?: string }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        if (theme === "light") {
            return setTheme("dark");
        }

        setTheme("light");
    }

    return (
        <button
            className={"theme-switcher bg-neutral-600 w-10 h-6 sm:w-14 sm:h-6 rounded-xl flex relative items-center " + className}
            onClick={toggleTheme}
        >
            <div className={`
                border-2 
                rounded-full
                w-6 h-6
                sm:w-7 sm:h-7
                flex 
                justify-center 
                items-center 
                absolute
                transition-all
                ease-in-out
                ${theme === "light" ? "border-gray-600" : "border-blue-300"}
                ${theme === "light" ? "bg-gray-200" : "bg-gray-800"}
                ${theme === "light" ? "translate-x-0" : "translate-x-full"}
                `}
            >
                {theme === "light" ? (
                    <FontAwesomeIcon icon={faSun} className="text-yellow-600" />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className="text-amber-200" />
                )}
            </div>
        </button>
    )
}

export default ThemeSwitcher