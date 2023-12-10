import React, { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonListContext';
import { faArrowDownShortWide, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DefaultButton from "../../components/DefaultButton/DefaultButton";

const PokelistSortButton = ({ type }: { type: "id" | "name" }) => {
    const { sort, setSort, order, setOrder } = useContext(PokemonContext);

    const handleSortClick = () => {
        if (sort !== type) {
            return setSort(type);
        }

        let newOrder = order === "asc" ? "desc" : "asc";
        setOrder(newOrder);
    }

    return (
        <DefaultButton isActive={sort === type} onClick={handleSortClick} >
            {type === "id" ? "ID" : "Nome"} {sort !== type || order === "asc" ? (
                <FontAwesomeIcon icon={faArrowDownShortWide} />
            ) : (
                <FontAwesomeIcon icon={faArrowUpWideShort} />
            )}
        </DefaultButton>
    )
}

export default PokelistSortButton