import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';

const ListItem = ({ href, border, children = null, className = "", exact = false, ...props }: {
    href: string,
    border: "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "teal" | "cyan" | "sky" | "blue" | "purple"
    className?: string,
    children?: any,
    exact?: boolean,
}) => {
    const pathname = usePathname();

    const isActive = () => {
        return exact ? pathname === href : pathname.includes(href);
    }

    const borders = {
        "red": "after:border-red-600 dark:after:border-red-400",
        "orange": "after:border-orange-600 dark:after:border-orange-400",
        "amber": "after:border-amber-600 dark:after:border-amber-400",
        "yellow": "after:border-yellow-600 dark:after:border-yellow-400",
        "lime": "after:border-lime-600 dark:after:border-lime-400",
        "green": "after:border-green-600 dark:after:border-green-400",
        "teal": "after:border-teal-600 dark:after:border-teal-400",
        "cyan": "after:border-cyan-600 dark:after:border-cyan-400",
        "sky": "after:border-sky-600 dark:after:border-sky-400",
        "blue": "after:border-blue-600 dark:after:border-blue-400",
        "purple": "after:border-purple-600 dark:after:border-purple-400",
    }

    const bgs = {
        "red": "hover:bg-red-700 hover:text-gray-200 dark:hover:bg-red-300 dark:hover:text-gray-800",
        "orange": "hover:bg-orange-700 hover:text-gray-200 dark:hover:bg-orange-300 dark:hover:text-gray-800",
        "amber": "hover:bg-amber-700 hover:text-gray-200 dark:hover:bg-amber-300 dark:hover:text-gray-800",
        "yellow": "hover:bg-yellow-700 hover:text-gray-200 dark:hover:bg-yellow-300 dark:hover:text-gray-800",
        "lime": "hover:bg-lime-700 hover:text-gray-200 dark:hover:bg-lime-300 dark:hover:text-gray-800",
        "green": "hover:bg-green-700 hover:text-gray-200 dark:hover:bg-green-300 dark:hover:text-gray-800",
        "teal": "hover:bg-teal-700 hover:text-gray-200 dark:hover:bg-teal-300 dark:hover:text-gray-800",
        "cyan": "hover:bg-cyan-700 hover:text-gray-200 dark:hover:bg-cyan-300 dark:hover:text-gray-800",
        "sky": "hover:bg-sky-700 hover:text-gray-200 dark:hover:bg-sky-300 dark:hover:text-gray-800",
        "blue": "hover:bg-blue-700 hover:text-gray-200 dark:hover:bg-blue-300 dark:hover:text-gray-800",
        "purple": "hover:bg-purple-700 hover:text-gray-200 dark:hover:bg-purple-300 dark:hover:text-gray-800",
    }

    const activeBg = {
        "red": "bg-red-700 text-gray-200 dark:bg-red-300 dark:text-gray-800",
        "orange": "bg-orange-700 text-gray-200 dark:bg-orange-300 dark:text-gray-800",
        "amber": "bg-amber-700 text-gray-200 dark:bg-amber-300 dark:text-gray-800",
        "yellow": "bg-yellow-700 text-gray-200 dark:bg-yellow-300 dark:text-gray-800",
        "lime": "bg-lime-700 text-gray-200 dark:bg-lime-300 dark:text-gray-800",
        "green": "bg-green-700 text-gray-200 dark:bg-green-300 dark:text-gray-800",
        "teal": "bg-teal-700 text-gray-200 dark:bg-teal-300 dark:text-gray-800",
        "cyan": "bg-cyan-700 text-gray-200 dark:bg-cyan-300 dark:text-gray-800",
        "sky": "bg-sky-700 text-gray-200 dark:bg-sky-300 dark:text-gray-800",
        "blue": "bg-blue-700 text-gray-200 dark:bg-blue-300 dark:text-gray-800",
        "purple": "bg-purple-700 text-gray-200 dark:bg-purple-300 dark:text-gray-800",
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