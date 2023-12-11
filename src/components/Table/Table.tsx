import React from 'react'

const borderColor = "border-solid border-gray-400 dark:border-gray-400"

const Table = ({ className = "", children, ...props }) => {
    return (
        <div className="relative overflow-x-auto w-full">
            <table
                className={`${className} min-w-full`} {...props} >
                {children}
            </table>
        </div>
    )
}

const Tr = ({ children, className = "", ...props }) => {
    return (
        <tr className={`odd:bg-gray-200 odd:dark:bg-slate-600 even:bg-gray-300 even:dark:bg-slate-700 border ${borderColor} ${className}`} {...props} >
            {children}
        </tr>
    )
}

const Th = ({ children, className = "", ...props }) => {
    return (
        <th className={`p-4 border border-solid bg-gray-400 dark:bg-slate-800 border-gray-600 dark:border-sky-200`} {...props} >
            {children}
        </th>
    )
}

const Td = ({ children, className = "", ...props }) => {
    return (
        <td className={`p-4 border ${borderColor} ${className}`} {...props} >
            {children}
        </td>
    )
}

Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;

export default Table