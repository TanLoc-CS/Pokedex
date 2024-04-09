import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Pokedex, PokemonCard, PokemonDetail } from '../interface';



export const usePokemon = () => {
  const baseUrl = 'https://pokeapi.co/api/v2/pokemon';
  const LIMIT = 15;
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any>();
  const [pokedex, setPokedex] = useState<Pokedex>([]);
  const [offset, setOffset] = useState<number>(15);
  const [pokemon, setPokemon] = useState<PokemonDetail>()
  const [pokemonCard, setPokemonCard] = useState<PokemonCard>({
    image: '',
    id: 0,
    types: []
  })

  useEffect(() => {
    const getPokedex = async () => {
      setLoading(true);

      try {
        const res = await axios.get(baseUrl + `?limit=${LIMIT}`);
        setLoading(false);
        setPokedex(res.data.results);
      } catch (e) {
        // console.error(e);
        setError(e);
        setLoading(false);
      }
    };

    getPokedex();
  }, [])

  const getPokemonById = useCallback(async (id: string) => {
    setLoading(true);

    try {
      const res = await axios.get(baseUrl + `/${id}`);
      setLoading(false);
      setPokemon(res.data);
    } catch (e) {
      // console.error(e);
      setError(e);
      setLoading(false);
    }
  }, []);


  const fetchMorePokemon = async () => {
    setLoading(true);

    try {
      const res = await axios.get(baseUrl + `?limit=${offset}`);
      console.log(res);
      setLoading(false);
      setPokedex(res.data.results)
      setOffset(offset + LIMIT);
    } catch (e) {
      // console.error(e);
      setError(e);
      setLoading(false);
    }
  }

  const getPokemonCard = useCallback(async (url: string) => {
    setLoading(true);

    try {
      const res = await axios.get(url);
      setLoading(false);
      setPokemonCard({
        image: res.data.sprites.front_default,
        id: res.data.id,
        types: res.data.types
      });
    } catch (e) {
      // console.error(e);
      setError(e);
      setLoading(false);
    }
  }, []);

  return {
    loading,
    error,
    pokedex,
    offset,
    pokemon,
    pokemonCard,
    fetchMorePokemon,
    getPokemonById,
    getPokemonCard
  };
}