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
        "red": "after:border-red-600 dark:after:border-red-300",
        "orange": "after:border-orange-600 dark:after:border-orange-300",
        "amber": "after:border-amber-600 dark:after:border-amber-300",
        "yellow": "after:border-yellow-600 dark:after:border-yellow-300",
        "lime": "after:border-lime-600 dark:after:border-lime-300",
        "green": "after:border-green-600 dark:after:border-green-300",
        "teal": "after:border-teal-600 dark:after:border-teal-300",
        "cyan": "after:border-cyan-600 dark:after:border-cyan-300",
        "sky": "after:border-sky-600 dark:after:border-sky-300",
        "blue": "after:border-blue-600 dark:after:border-blue-300",
        "purple": "after:border-purple-600 dark:after:border-purple-300",
    }

    const bgs = {
        "red": "hover:bg-red-600 hover:text-gray-200 dark:hover:bg-red-300 dark:hover:text-gray-700",
        "orange": "hover:bg-orange-600 hover:text-gray-200 dark:hover:bg-orange-300 dark:hover:text-gray-700",
        "amber": "hover:bg-amber-600 hover:text-gray-200 dark:hover:bg-amber-300 dark:hover:text-gray-700",
        "yellow": "hover:bg-yellow-600 hover:text-gray-200 dark:hover:bg-yellow-300 dark:hover:text-gray-700",
        "lime": "hover:bg-lime-600 hover:text-gray-200 dark:hover:bg-lime-300 dark:hover:text-gray-700",
        "green": "hover:bg-green-600 hover:text-gray-200 dark:hover:bg-green-300 dark:hover:text-gray-700",
        "teal": "hover:bg-teal-600 hover:text-gray-200 dark:hover:bg-teal-300 dark:hover:text-gray-700",
        "cyan": "hover:bg-cyan-600 hover:text-gray-200 dark:hover:bg-cyan-300 dark:hover:text-gray-700",
        "sky": "hover:bg-sky-600 hover:text-gray-200 dark:hover:bg-sky-300 dark:hover:text-gray-700",
        "blue": "hover:bg-blue-600 hover:text-gray-200 dark:hover:bg-blue-300 dark:hover:text-gray-700",
        "purple": "hover:bg-purple-600 hover:text-gray-200 dark:hover:bg-purple-300 dark:hover:text-gray-700",
    }

    const activeBg = {
        "red": "bg-red-600 text-gray-200 dark:bg-red-300 dark:text-gray-700",
        "orange": "bg-orange-600 text-gray-200 dark:bg-orange-300 dark:text-gray-700",
        "amber": "bg-amber-600 text-gray-200 dark:bg-amber-300 dark:text-gray-700",
        "yellow": "bg-yellow-600 text-gray-200 dark:bg-yellow-300 dark:text-gray-700",
        "lime": "bg-lime-600 text-gray-200 dark:bg-lime-300 dark:text-gray-700",
        "green": "bg-green-600 text-gray-200 dark:bg-green-300 dark:text-gray-700",
        "teal": "bg-teal-600 text-gray-200 dark:bg-teal-300 dark:text-gray-700",
        "cyan": "bg-cyan-600 text-gray-200 dark:bg-cyan-300 dark:text-gray-700",
        "sky": "bg-sky-600 text-gray-200 dark:bg-sky-300 dark:text-gray-700",
        "blue": "bg-blue-600 text-gray-200 dark:bg-blue-300 dark:text-gray-700",
        "purple": "bg-purple-600 text-gray-200 dark:bg-purple-300 dark:text-gray-700",
    }

    const defaultBg = {
        "red": "bg-red-600/5 dark:bg-red-300/5",
        "orange": "bg-orange-600/5 dark:bg-orange-300/5",
        "amber": "bg-amber-600/5 dark:bg-amber-300/5",
        "yellow": "bg-yellow-600/5 dark:bg-yellow-300/5",
        "lime": "bg-lime-600/5 dark:bg-lime-300/5",
        "green": "bg-green-600/5 dark:bg-green-300/5",
        "teal": "bg-teal-600/5 dark:bg-teal-300/5",
        "cyan": "bg-cyan-600/5 dark:bg-cyan-300/5",
        "sky": "bg-sky-600/5 dark:bg-sky-300/5",
        "blue": "bg-blue-600/5 dark:bg-blue-300/5",
        "purple": "bg-purple-600/5 dark:bg-purple-300/5",
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
            after:min-[300px]:border-b-[5px]
            after:min-[300px]:w-full
            after:min-[300px]:absolute
            after:min-[300px]:bottom-[-5px]
            after:min-[300px]:z-50
            text-sm
            sm:text-lg
            ${isActive() ? activeBg[border] : 'text-gray-700 dark:text-gray-200'}
            ${className}
        `} style={{ zIndex: 70 }}>
            <Link href={href} className="w-full text-center">
                {children}
            </Link>
        </li>
    )
}

export default ListItem