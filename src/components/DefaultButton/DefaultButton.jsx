import React from 'react'

const DefaultButton = ({ isActive = false, className = "", children, onClick, disabled=false, ...props }) => {
    return (
        <button
            type="button"
            className={`
                transition-all
                p-2
                rounded-md
                text-md
                font-bold
                hover:opacity-70
                ${disabled && "opacity-80"}
                ${className}
                ${isActive ? `
                    bg-gray-600 
                    text-gray-300 
                    border-2 
                    border-gray-600
                    dark:bg-sky-200
                    dark:text-gray-800
                    dark:border-sky-200
                ` : `
                    bg-gray-300 
                    text-gray-600 
                    border-2 
                    border-gray-600
                    dark:bg-gray-800
                    dark:text-sky-200
                    dark:border-sky-200
                `}
            `}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </button>
    )
}

export default DefaultButton