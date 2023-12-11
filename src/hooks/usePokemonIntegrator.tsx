import usePokemonFetcher from '@/hooks/usePokemonFetcher'

type Pokemon = {
    name: string
    url: string
};

const usePokemonIntegrator = () => {
    const fetcher = usePokemonFetcher();

    const getEvolutionChain = async (url: string) => {
        const chain = await fetcher.get(url);
        let data = [];
        return await getEvolvingData(data, chain.chain);
    }

    const getEvolvingData = (data: Array<any>, actualChain: any) => {
        if (typeof actualChain.species === 'undefined') return;

        let pokemonId = actualChain.species.url.replace(fetcher.api_url + "/pokemon-species/", "").replace("/", "");

        let details = actualChain.evolution_details.length > 0 ? actualChain.evolution_details[0] : {};
        const actualPokemon = {
            id: pokemonId,
            url: `pokemon/${pokemonId}`,
            evolution_details: details
        }

        data.push(actualPokemon);

        if (typeof actualChain.evolves_to !== 'undefined' && actualChain.evolves_to.length > 0) {
            return getEvolvingData(data, actualChain.evolves_to[0]);
        }

        return data;
    }

    const getPokemonById = async (id: number, withSpecies = true, withTypes = true) => {
        let result = await fetcher.get("pokemon/" + id);
        if (withSpecies) {
            result = await getSpecies(result);
        }
        if (withTypes) {
            result = await getTypes(result);
        }
        return result;
    }

    const integrateData = async (pokemon: Pokemon, withSpecies: boolean = false, withTypes = false) => {
        const result = await fetcher.get(pokemon.url);
        let actualData = {
            ...pokemon,
            ...result,
        };

        if (withSpecies) {
            actualData = await getSpecies(actualData);
        }
        if (withTypes) {
            actualData = await getTypes(actualData);
        }
        return actualData;
    }

    const getSpecies = async (data: any) => {
        const species = await fetcher.get(data.species.url);

        return {
            ...data,
            species: {
                ...species,
            },
        };
    }

    const getTypes = async (data: any) => {
        const promises = data.types.map(async (type: any) => {
            let typeData = await fetcher.get(type.type.url);
            typeData.name = type.type.name;
            return typeData;
        });

        let typesData = await Promise.all(promises);

        return {
            ...data,
            types: [
                ...typesData,
            ],
        };
    }

    const getPaginated = async (offset: number, limit: number) => {
        const data = await fetcher.get("pokemon", {
            limit,
            offset
        });

        return [...data.results];
    }

    return { getPokemonById, integrateData, getEvolutionChain, getPaginated };
}

export default usePokemonIntegrator