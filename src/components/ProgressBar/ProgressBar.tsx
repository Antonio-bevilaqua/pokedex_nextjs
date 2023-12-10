import React from 'react'
import "./ProgressBar.css";

export enum colorType {
    red = "red",
    orange = "orange",
    yellow = "yellow",
    purple = "purple",
    indigo = "indigo",
    sky = "sky",
    cyan = "cyan",
    teal = "teal",
    emerald = "emerald",
    green = "green",
}

export type colorTypeKey = keyof typeof colorType;

type Props = {
    percentage?: number,
    className?: string,
    color?: colorTypeKey,
    text?: boolean,
    animated?: boolean,
}

const ProgressBar = ({ color = "sky", percentage = 0, className = "", text = false, animated = false }: Props) => {

    const colors = {
        "red": "bg-red-600 dark:bg-red-400 text-red-900 dark:text-red-600",
        "orange": "bg-orange-600 dark:bg-orange-400 text-orange-900 dark:text-orange-600",
        "yellow": "bg-yellow-600 dark:bg-yellow-400 text-yellow-900 dark:text-yellow-600",
        "purple": "bg-purple-600 dark:bg-purple-400 text-purple-900 dark:text-purple-600",
        "indigo": "bg-indigo-600 dark:bg-indigo-400 text-indigo-900 dark:text-indigo-600",
        "sky": "bg-sky-600 dark:bg-sky-400 text-sky-900 dark:text-sky-600",
        "cyan": "bg-cyan-600 dark:bg-cyan-400 text-cyan-900 dark:text-cyan-600",
        "teal": "bg-teal-600 dark:bg-teal-400 text-teal-900 dark:text-teal-600",
        "emerald": "bg-emerald-600 dark:bg-emerald-400 text-emerald-900 dark:text-emerald-600",
        "green": "bg-green-600 dark:bg-green-400 text-green-900 dark:text-green-600",
    };

    return (
        <div className={`w-full bg-gray-300 rounded-full dark:bg-gray-700 ${animated ? "animated" : ""} ${className}`} >
            <div className={colors[color] + " text-xs progress-bar font-medium text-center p-0.5 leading-none h-full rounded-full"} style={{ width: `${percentage}%` }}>
                {text ? `${Math.round(percentage)}%` : ''}
            </div>
        </div>
    )
}

export default ProgressBar