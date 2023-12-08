"use client";

import PokemonListContext from "../src/contexts/PokemonListContext";
import PokeListScreen from "../src/screens/PokeListScreen";

export default function Page() {

    return (
        <PokemonListContext>
            <PokeListScreen />
        </PokemonListContext>
    );
}