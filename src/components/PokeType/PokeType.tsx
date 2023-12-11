import React from 'react'
import { typeClasses, typeBorders } from "./typeUtils";
import { typeTranslations } from "../../../assets/utils/translations";

type Props = {
    type: any,
    children?: any,
}

const PokeType = ({ type, children }: Props) => {

    return (
        <div className={typeClasses[type.name] + typeBorders[type.name] + " rounded-lg p-1 relative capitalize min-w-fit w-full text-center border-solid border-2 font-bold"}>
            {typeTranslations[type.name]}
            {children}
        </div>
    )
}

export default PokeType