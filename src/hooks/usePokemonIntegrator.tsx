import usePokemonFetcher from './usePokemonFetcher'

type Pokemon = {
    name: string
    url: string
};

const usePokemonIntegrator = () => {
    const fetcher = usePokemonFetcher();

    const integrateData = async (pokemon: Pokemon) => {
        const result = await fetcher.get(pokemon.url);
        const species = await fetcher.get(result.species.url);

        return {
            ...pokemon,
            ...result,
            species: {
                ...species,
                ...result.species
            },
        };
    }

    return { integrateData };
}

export default usePokemonIntegrator