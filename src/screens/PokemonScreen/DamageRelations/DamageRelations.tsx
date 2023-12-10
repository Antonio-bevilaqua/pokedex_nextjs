import React from 'react'
import { getDamageRelationValues, getDefenseRelationValues } from "./getRelationValues";
import DamageRelationBadge from './DamageRelationBadge/DamageRelationBadge';

type Props = {
    relation: "damage" | "defense",
    types: Array<any>
}

const DamageRelations = ({ relation, types }: Props) => {
    const relations = relation === "damage" ? getDamageRelationValues(types) : getDefenseRelationValues(types);

    return (
        <>
            {relations.map((related: any, idx: number) => (
                <DamageRelationBadge type={relation} value={related.value} name={related.name} key={`forte_${relation}_${idx}`} />
            ))}
        </>
    )
}

export default DamageRelations