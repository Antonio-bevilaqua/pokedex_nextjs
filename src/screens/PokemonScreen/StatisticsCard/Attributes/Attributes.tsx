import React from 'react'
import SingleAttribute from './SingleAttribute'

type Stat = {
    base_stat: number,
    effort: number,
    stat: InnerStat
}

type InnerStat = {
    name: string,
    url: string,
}

const Attributes = ({ stats }) => {
    return (
        <>
            {stats.map((stat: Stat, index: number) => (
                <SingleAttribute name={stat.stat.name} value={stat.base_stat} maxValue={300} key={`stat${index}`} />
            ))}
        </>
    )
}

export default Attributes