import React, { useEffect, useState } from "react";
import usePokemonIntegrator from "../hooks/usePokemonIntegrator";
import useScrollTracker from "../hooks/useScrollTracker";

export const PokemonContext = React.createContext({
    fullPokemonList: [],
    pokemonList: [],
    limit: null,
    offset: null,
    setPokemonList: () => { },
    loadMore: () => { },
    changeLimit: () => { },
});

export default function PokemonListContext({ children }) {
    const { scrollPosition, getRawPosition } = useScrollTracker();
    const [ready, setReady] = useState(false);
    const [fullPokemonList, setFullPokemonList] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const { getPaginated } = usePokemonIntegrator();

    const initialLoad = async () => {
        const data = await getPaginated(0, 2000);

        setFullPokemonList(data.map((element, index) => { return { ...element, id: index + 1 }; }));
        return data;
    }

    const loadMore = async () => {
        let actualList = [...fullPokemonList];
        if (actualList.length === 0) {
            actualList = await initialLoad();
        }

        let toShowList = actualList.slice(0, offset + limit);

        let newOffset = offset + limit;
        setOffset(newOffset);
        setPokemonList([...toShowList]);
        setReady(true);
    }

    const changeLimit = async (newLimit) => {
        setOffset(0);
        setLimit(newLimit);
        const data = await getPaginated(0, newLimit);

        setPokemonList(data);
    }

    useEffect(() => {
        loadMore();
    }, []);

    useEffect(() => {
        localStorage.setItem("actual_scroll_position", getRawPosition());
    }, [scrollPosition]);

    if (!ready) return <></>;

    return (
        <PokemonContext.Provider value={{
            fullPokemonList,
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