import React, { useEffect, useState } from "react";
import usePokemonIntegrator from "@/hooks/usePokemonIntegrator";
import useScrollTracker from "@/hooks/useScrollTracker";

export const PokemonContext = React.createContext({
    fullPokemonList: [],
    pokemonList: [],
    limit: null,
    offset: null,
    sort: "id",
    order: "asc",
    maxPages: null,
    setPokemonList: (val) => { },
    loadMore: () => { },
    changeLimit: (val) => { },
    loadPage: (val) => { },
    sortElements: (sort, order, resetListing = false) => { },
});

export default function PokemonListContext({ children }) {
    const { scrollPosition, getRawPosition } = useScrollTracker();
    const [ready, setReady] = useState(false);
    const [fullPokemonList, setFullPokemonList] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [maxPages, setMaxPages] = useState(1);
    const [sort, setSort] = useState("id");
    const [order, setOrder] = useState("asc");
    const { getPaginated } = usePokemonIntegrator();

    const initialLoad = async () => {
        const data = await getPaginated(0, 2000);
        let fullPokelist = data.map((element, index) => { return { ...element, id: index + 1 }; });
        setFullPokemonList(fullPokelist);
        setMaxPages(Math.ceil(fullPokelist.length / limit));
        setReady(true);
        return data;
    }

    const loadMore = async () => {
        let actualList = [...fullPokemonList];
        let toShowList = actualList.slice(0, offset + limit);

        let newOffset = offset + limit;
        setOffset(newOffset);
        setPokemonList([...toShowList]);
    }

    const loadPage = async (page) => {
        let pageOffset = (page - 1) * limit;
        let actualList = [...fullPokemonList];
        let toShowList = actualList.slice(pageOffset, pageOffset + limit);
        setOffset(pageOffset);
        setPokemonList([...toShowList]);
    }

    const changeLimit = async (newLimit) => {
        setOffset(0);
        setLimit(newLimit);
        const data = await getPaginated(0, newLimit);

        setPokemonList(data);
    }

    const sortElements = (sort, order, resetListing = false) => {
        setSort(sort);
        setOrder(order);
        let newPokemonList = fullPokemonList.sort((a, b) => {
            let first = order === "asc" ? a[sort] : b[sort];
            let second = order === "asc" ? b[sort] : a[sort];

            if (first < second) return -1;
            if (second > first) return 1;
            return b;
        });
        setFullPokemonList(newPokemonList);

        if (resetListing) {
            return restartListing(newPokemonList);
        }

        let actualList = [...newPokemonList];
        let toShowList = actualList.slice(offset, offset + limit);
        setPokemonList([...toShowList]);
    }

    const restartListing = (newPokemonList) => {
        let actualList = [...newPokemonList];
        let toShowList = actualList.slice(0, limit);
        setOffset(limit);
        setPokemonList([...toShowList]);
    }

    useEffect(() => {
        initialLoad();
    }, []);

    useEffect(() => {
        localStorage.setItem("actual_scroll_position", getRawPosition());
    }, [scrollPosition]);

    if (!ready) return <></>;

    return (
        <PokemonContext.Provider value={{
            fullPokemonList,
            pokemonList,
            limit,
            offset,
            sort,
            order,
            maxPages,
            loadPage,
            setPokemonList,
            loadMore,
            changeLimit,
            sortElements,
        }}>
            {children}
        </PokemonContext.Provider>
    )
}