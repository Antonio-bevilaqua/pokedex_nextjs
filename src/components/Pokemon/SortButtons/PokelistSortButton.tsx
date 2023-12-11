import React, { useContext } from 'react'
import { PokemonContext } from '@/contexts/PokemonListContext';
import { faArrowDownShortWide, faArrowUpWideShort } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Button from "@/components/Button/Button";

const PokelistSortButton = ({ type, resetListingOnSort = false }: { type: "id" | "name", resetListingOnSort?: boolean }) => {
    const { sort, order, sortElements } = useContext(PokemonContext);

    const handleSortClick = () => {
        if (sort !== type) {
            return sortElements(type, "asc", resetListingOnSort);
        }

        let newOrder = order === "asc" ? "desc" : "asc";
        return sortElements(sort, newOrder, resetListingOnSort);
    }

    return (
        <Button color="theme" bordered transparentBg={sort !== type} onClick={handleSortClick} >
            {type === "id" ? "ID" : "Nome"}
            {sort === type ? (
                <>
                    {sort !== type || order === "asc" ? (
                        <FontAwesomeIcon icon={faArrowDownShortWide} className="pl-1" />
                    ) : (
                        <FontAwesomeIcon icon={faArrowUpWideShort} className="pl-1" />
                    )}
                </>
            ) : null}
        </Button>
    )
}

export default PokelistSortButton