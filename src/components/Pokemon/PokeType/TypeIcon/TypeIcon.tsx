import React from 'react'
import normal from "@/assets/icons/types/normal.svg"
import fighting from "@/assets/icons/types/fighting.svg"
import flying from "@/assets/icons/types/flying.svg"
import poison from "@/assets/icons/types/poison.svg"
import ground from "@/assets/icons/types/ground.svg"
import rock from "@/assets/icons/types/rock.svg"
import bug from "@/assets/icons/types/bug.svg"
import ghost from "@/assets/icons/types/ghost.svg"
import steel from "@/assets/icons/types/steel.svg"
import fire from "@/assets/icons/types/fire.svg"
import water from "@/assets/icons/types/water.svg"
import grass from "@/assets/icons/types/grass.svg"
import electric from "@/assets/icons/types/electric.svg"
import psychic from "@/assets/icons/types/psychic.svg"
import ice from "@/assets/icons/types/ice.svg"
import dragon from "@/assets/icons/types/dragon.svg"
import dark from "@/assets/icons/types/dark.svg"
import fairy from "@/assets/icons/types/fairy.svg"
import { typeTranslations } from '@/assets/utils/translations'
import Image from 'next/image'


const TypeIcon = ({ type }) => {
  const typeMap = {
    "normal": normal,
    "fighting": fighting,
    "flying": flying,
    "poison": poison,
    "ground": ground,
    "rock": rock,
    "bug": bug,
    "ghost": ghost,
    "steel": steel,
    "fire": fire,
    "water": water,
    "grass": grass,
    "electric": electric,
    "psychic": psychic,
    "ice": ice,
    "dragon": dragon,
    "dark": dark,
    "fairy": fairy,
  };

  return (
    <>
      {type.name in typeMap ? (
        <Image
          src={typeMap[type.name]}
          alt={typeTranslations[type.name]}
          title={typeTranslations[type.name]}
          width={18}
          className="invert brightness-75"
        />
      ) : (
        <div
          title={typeTranslations[type.name]}
          className="opacity-0"
          style={{ width: "18px", height: "18px" }}
        ></div>
      )}
    </>
  )
}

export default TypeIcon