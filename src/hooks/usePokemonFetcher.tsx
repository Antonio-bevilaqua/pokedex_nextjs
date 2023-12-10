import DataFetcherService from "../services/DataFetcherService";

const usePokemonFetcher = () => {
  const api_url = "https://pokeapi.co/api/v2";

  const get = async (endpoint: string, params: Object | null = null) => {
    const dataFetcher = new DataFetcherService(api_url);
    return await dataFetcher.get(endpoint, params);
  }

  return { get, api_url };
}

export default usePokemonFetcher;