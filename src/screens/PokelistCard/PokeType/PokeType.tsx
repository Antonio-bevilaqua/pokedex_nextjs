import React, { useEffect } from 'react'
import { typeClasses, translation } from "./typeUtils";



const PokeType = ({ type }) => {

    return (
        <div className={typeClasses[type.name] + " rounded-lg p-1 capitalize w-full text-center border-solid border-2 font-bold"}>{translation[type.name]}</div>
    )
}

export default PokeType