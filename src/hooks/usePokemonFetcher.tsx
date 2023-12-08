import DataFetcherService from "../services/DataFetcherService";

const usePokemonFetcher = () => {
  const dataFetcher = new DataFetcherService("https://pokeapi.co/api/v2");

  const get = async (endpoint: string, params: Object | null = null) => {
    return await dataFetcher.get(endpoint, params);
  }

  return { get };
}

export default usePokemonFetcher;