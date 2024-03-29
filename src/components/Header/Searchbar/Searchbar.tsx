import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react'
import { PokemonContext } from '@/contexts/PokemonListContext';
import "@/styles/searchbar/searchbar.css";
import useRedirection from '@/hooks/useRedirection';
import usePokemonFetcher from '@/hooks/usePokemonFetcher';

const Searchbar = ({ className = "" }: { className?: string }) => {
    const router = useRedirection();
    const { fullPokemonList } = useContext(PokemonContext);
    const { api_url } = usePokemonFetcher();
    const [search, setSearch] = useState("");
    const [list, setList] = useState([]);

    const onSearchChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        setList(fullPokemonList.filter((pokemon) => pokemon.name.toUpperCase().includes(e.target.value.toUpperCase())));
    }

    const searchPokemon = (pokemon: any) => {
        setSearch("");
        const id = pokemon.url.replace(api_url + "/pokemon/", "").replace("/", "");
        router.push('/pokemon/' + id);
    }

    return (
        <div className={"searchInput sm:w-56 flex-1 max-w-full relative items-center pl-5 p-2 " + className} >
            <span className="absolute right-4 pt-2 text-gray-500 dark:text-gray-800 pb-2"><FontAwesomeIcon icon={faSearch} /></span>
            <input
                placeholder='Buscar...'
                className="p-2 pr-8 w-full rounded-md placeholder:text-gray-500 dark:placeholder:text-gray-800 active:outline-none focus-within:outline-none focus:outline-none text-gray-700 dark:text-gray-300 bg-gray-400 dark:bg-gray-600 h-7"
                value={search}
                onChange={onSearchChanged}
            />
            {list.length > 0 && search.length >= 2 && (
                <div className="searchbar absolute left-0 w-56 rounded-lg bg-gray-300 overflow-y-auto max-h-44 dark:bg-gray-900 border-solid border-2 border-gray-600 dark:border-sky-200" style={{ zIndex: 200, top: "3.2rem" }}>
                    <ul>
                        {list.map((pokemon) => (
                            <a
                                href="#"
                                onClick={() => searchPokemon(pokemon)}
                                key={`search-list-${pokemon.id}`}
                            >
                                <li
                                    className="bg-gray-300 dark:bg-gray-900 hover:bg-gray-400 dark:hover:bg-gray-800 p-2 font-bold text-gray-600 dark:text-gray-300"
                                >
                                    {pokemon.name}
                                </li>
                            </a>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default Searchbar