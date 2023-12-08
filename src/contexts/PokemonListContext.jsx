import React, { useState } from "react";
import usePokemonFetcher from "../hooks/usePokemonFetcher";

export const PokemonContext = React.createContext({
    pokemonList: [],
    limit: null,
    offset: null,
    setPokemonList: () => { },
    loadMore: () => { },
    changeLimit: () => { },
});

export default function PokemonListContext({ children }) {
    const [pokemonList, setPokemonList] = useState([]);
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const pokemonFetcher = usePokemonFetcher();

    const loadMore = async () => {
        const data = await pokemonFetcher.get("pokemon", {
            limit,
            offset
        });

        setOffset(offset + limit);
        setPokemonList([...pokemonList, ...data.results]);
    }

    const changeLimit = async (newLimit) => {
        setOffset(0);
        setLimit(newLimit);
        const data = await pokemonFetcher.get("pokemon", {
            newLimit,
            offset: 0
        });

        setPokemonList([...data.results]);
    }

    return (
        <PokemonContext.Provider value={{
            pokemonList,
            setPokemonList,
            limit,
            offset,
            loadMore,
            changeLimit,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}