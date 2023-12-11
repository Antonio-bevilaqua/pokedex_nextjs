import React from 'react'
import PokeType from '@/components/Pokemon/PokeType/PokeType'

type Props = {
    type: "damage" | "defense",
    value: number,
    name: string
}

const DamageRelationBadge = ({ type, value, name }: Props) => {
    const getColor = () => {
        if (type === "damage") return getDamageColor();

        return getDefenseColor();
    }

    const getDamageColor = () => {
        if (value < 1) return "bg-red-700 text-red-100";

        if (value === 1) return "bg-blue-700 text-blue-100";

        return "bg-green-700 text-green-100";
    }
    const getDefenseColor = () => {
        if (value < 1) return "bg-green-700 text-green-100";

        if (value === 1) return "bg-blue-700 text-blue-100";

        return "bg-red-700 text-red-100";
    }

    const getVal = () => {
        if (type === "damage") return getDmgVal();

        return getDefVal();
    }

    const getDmgVal = () => {
        return `${value * 100}%`;
    }

    const getDefVal = () => {
        if (value < 0) return "100%";
        return `${(1 - value) * 100}%`;
    }

    return (
        <div className="flex text-sm">
            <PokeType type={{ name: name }} />
            <span className={`${getColor()} -ml-2 z-10 rounded-r-md w-16 flex items-center justify-center font-bold text-sm normal-case`}>
                {getVal()}
            </span>
        </div>
    )
}

export default DamageRelationBadge