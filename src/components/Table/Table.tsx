import React from 'react'

const borderColor = "border-solid border-gray-400 dark:border-gray-500"

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
        <tr className={`border ${borderColor} ${className}`} {...props} >
            {children}
        </tr>
    )
}

const Th = ({ children, className = "", ...props }) => {
    return (
        <th className={`p-4 border ${borderColor} ${className}`} {...props} >
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