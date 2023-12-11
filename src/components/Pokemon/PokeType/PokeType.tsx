import React from 'react'
import { typeClasses, typeBorders } from "./typeUtils";
import { typeTranslations } from "@/assets/utils/translations";
import TypeIcon from './TypeIcon/TypeIcon';

type Props = {
    type: any,
    isIcon?: boolean,
    children?: any,
}

const PokeType = ({ type, children, isIcon = false }: Props) => {

    if (isIcon) {
        return (
            <div className={typeClasses[type.name] + " rounded-full flex justify-center p-0 items-center w-7 h-7 border-2 border-solid border-neutral-600"}>
                <TypeIcon type={type} />
            </div>
        )
    }

    return (
        <div className={typeClasses[type.name] + typeBorders[type.name] + " rounded-lg p-1 relative capitalize min-w-fit w-full text-center border-solid border-2 font-bold"}>
            {typeTranslations[type.name]}
            {children}
        </div>
    )
}

export default PokeType