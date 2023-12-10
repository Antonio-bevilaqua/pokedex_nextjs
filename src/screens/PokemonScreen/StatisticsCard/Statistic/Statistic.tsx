import React from 'react'

type Props = {
    children?: any,
    className?: string,
}

const Statistic = ({ children, className = "", ...props }: Props) => {
    return (
        <div className={"border-solid border-t-2 border-gray-600 dark:border-sky-200 p-2 flex items-center " + className} {...props}>
            {children}
        </div>
    )
}

const StatisticTitle = ({ children, className = "", ...props }) => {
    return (
        <h2 className={'text-gray-500 dark:text-gray-400 text-lg w-24 m-0 ' + className} {...props} >
            {children}
        </h2>
    );
}

const StatisticValue = ({ children, className = "", ...props }) => {
    return (    
        <span className={'text-gray-600 dark:text-gray-200 text-lg m-0 ' + className} {...props} >
            {children}
        </span>
    );
}

Statistic.Title = StatisticTitle;
Statistic.Value = StatisticValue;

export default Statistic