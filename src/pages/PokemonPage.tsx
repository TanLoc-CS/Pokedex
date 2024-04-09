import React, { useEffect } from 'react'
import { useParams } from 'react-router';
import { PokemonId } from '../interface';
import { usePokemon } from '../hook/usePokemon';
import { addLeadingZeros, capitalize } from '../utils';
import InfoBox from '../components/InfoBox';
import StatsBox from '../components/StatsBox';

const PokemonPage = () => {
  const UNDEFINED_IMAGE =
    'https://toppng.com/uploads/preview/pokebal-11551056774gjirnzpl7t.png'
  const { id } = useParams<PokemonId>();
  const { pokemon, getPokemonById } = usePokemon();

  useEffect(() => {
    getPokemonById(id || '');
  }, [])

  return (
    <div className="pt-24 flex flex-col justify-start items-center">
      <div className='flex flex-row mb-4'>
        {pokemon && <h1 className="text-4xl mr-4 font-bold">{capitalize(pokemon.name)}</h1>}
        {pokemon?.id && <h1 className='text-4xl'>{'#' + addLeadingZeros(pokemon?.id as number)}</h1>}
      </div>

      <div className='md:w-[1200px] h-[720px] flex flex-row justify-between items-center'>
        <img
          src={
            pokemon === undefined
              ? UNDEFINED_IMAGE
              : pokemon?.sprites?.other['official-artwork']?.front_default
          }
          alt="pokemon"
          className="w-[500px] h-[500px] bg-poke-charcoal bg-opacity-25 rounded-lg shadow-lg"
        />

        <div className='w-[600px] h-[680px] flex flex-col justify-between items-center'>
          <InfoBox pokemon={pokemon} />
          <StatsBox pokemon={pokemon} />
        </div>
      </div>
    </div>
  )
}

export default PokemonPage;