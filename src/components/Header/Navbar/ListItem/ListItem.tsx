import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const ListItem = ({ href, border, children = null, className = "", activeRoute, exact = false, ...props }: {
    href: string,
    activeRoute: string,
    border: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "teal" | "cyan" | "sky" | "blue" | "purple"
    className?: string,
    children?: any,
    exact?: boolean,
}) => {
    const pathname = usePathname();

    const isActive = () => {
        return exact ? pathname === activeRoute : pathname.includes(activeRoute);
    }

    const borders = {
        "red": "after:border-red-500 dark:after:border-red-500",
        "orange": "after:border-orange-500 dark:after:border-orange-500",
        "amber": "after:border-amber-500 dark:after:border-amber-500",
        "yellow": "after:border-yellow-500 dark:after:border-yellow-500",
        "lime": "after:border-lime-500 dark:after:border-lime-500",
        "green": "after:border-green-500 dark:after:border-green-500",
        "teal": "after:border-teal-500 dark:after:border-teal-500",
        "cyan": "after:border-cyan-500 dark:after:border-cyan-500",
        "sky": "after:border-sky-500 dark:after:border-sky-500",
        "blue": "after:border-blue-500 dark:after:border-blue-500",
        "purple": "after:border-purple-500 dark:after:border-purple-500",
    }

    const bgs = {
        "red": "hover:bg-red-600 hover:text-gray-200 dark:hover:bg-red-400 dark:hover:text-gray-800",
        "orange": "hover:bg-orange-600 hover:text-gray-200 dark:hover:bg-orange-400 dark:hover:text-gray-800",
        "amber": "hover:bg-amber-600 hover:text-gray-200 dark:hover:bg-amber-400 dark:hover:text-gray-800",
        "yellow": "hover:bg-yellow-600 hover:text-gray-200 dark:hover:bg-yellow-400 dark:hover:text-gray-800",
        "lime": "hover:bg-lime-600 hover:text-gray-200 dark:hover:bg-lime-400 dark:hover:text-gray-800",
        "green": "hover:bg-green-600 hover:text-gray-200 dark:hover:bg-green-400 dark:hover:text-gray-800",
        "teal": "hover:bg-teal-600 hover:text-gray-200 dark:hover:bg-teal-400 dark:hover:text-gray-800",
        "cyan": "hover:bg-cyan-600 hover:text-gray-200 dark:hover:bg-cyan-400 dark:hover:text-gray-800",
        "sky": "hover:bg-sky-600 hover:text-gray-200 dark:hover:bg-sky-400 dark:hover:text-gray-800",
        "blue": "hover:bg-blue-600 hover:text-gray-200 dark:hover:bg-blue-400 dark:hover:text-gray-800",
        "purple": "hover:bg-purple-600 hover:text-gray-200 dark:hover:bg-purple-400 dark:hover:text-gray-800",
    }

    const activeBg = {
        "red": "bg-red-600 text-gray-200 dark:bg-red-400 dark:text-gray-800",
        "orange": "bg-orange-600 text-gray-200 dark:bg-orange-400 dark:text-gray-800",
        "amber": "bg-amber-600 text-gray-200 dark:bg-amber-400 dark:text-gray-800",
        "yellow": "bg-yellow-600 text-gray-200 dark:bg-yellow-400 dark:text-gray-800",
        "lime": "bg-lime-600 text-gray-200 dark:bg-lime-400 dark:text-gray-800",
        "green": "bg-green-600 text-gray-200 dark:bg-green-400 dark:text-gray-800",
        "teal": "bg-teal-600 text-gray-200 dark:bg-teal-400 dark:text-gray-800",
        "cyan": "bg-cyan-600 text-gray-200 dark:bg-cyan-400 dark:text-gray-800",
        "sky": "bg-sky-600 text-gray-200 dark:bg-sky-400 dark:text-gray-800",
        "blue": "bg-blue-600 text-gray-200 dark:bg-blue-400 dark:text-gray-800",
        "purple": "bg-purple-600 text-gray-200 dark:bg-purple-400 dark:text-gray-800",
    }

    return (
        <li className={`
            pl-5
            pr-5
            h-full
            relative
            font-bold
            flex
            items-center
            justify-center
            border-solid
            transition-all
            ${borders[border]}
            ${bgs[border]}
            pt-1
            pb-1
            min-[300px]:pt-0
            min-[300px]:pb-0
            w-full min-[300px]:w-auto
            after:min-[300px]:content-[' ']
            after:min-[300px]:border-b-[4px]
            after:min-[300px]:w-full
            after:min-[300px]:absolute
            after:min-[300px]:bottom-[-4px]
            after:min-[300px]:z-50
            text-sm
            sm:text-lg
            ${isActive() ? activeBg[border] : 'text-gray-700 dark:text-sky-200'}
            ${className}
        `} style={{ zIndex: 70 }}>
            <Link href={href} className="w-full text-center">
                {children}
            </Link>
        </li>
    )
}

export default ListItem