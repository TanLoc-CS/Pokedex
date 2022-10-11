import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

import { PokemonId, Types, PokemonDetail } from '../interface'
import colorPicker from '../utils/pokemonColor'
import StatsTab from '../components/StatsTab'
// import PageNotFound from './PageNotFound'

const UNDEFINED_IMAGE =
  'https://toppng.com/uploads/preview/pokebal-11551056774gjirnzpl7t.png'

function renderTypes(types: Types) {
  if (types.length === 1)
    return (
      <div
        className={
          'w-[100px] h-10 text-white flex flex-row justify-center items-center rounded-lg ml-4 ' +
          colorPicker(types[0].type.name)
        }
      >
        {types[0].type.name}
      </div>
    )

  return (
    <>
      {types.map((val, index) => (
        <div
          key={val.type.name}
          className={
            'w-[100px] h-10 text-white flex flex-row justify-center items-center rounded-lg ml-4 ' +
            colorPicker(types[index].type.name)
          }
        >
          {val.type.name}
        </div>
      ))}
    </>
  )
}

function PokemonPage() {
  const { id } = useParams<PokemonId>()
  const [pokemon, setPokemon] = useState<PokemonDetail>()

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + id
    axios.get(url).then((res) => {
      setPokemon(res.data)
    })
  }, [])

  return (
    <div className="pt-24 flex flex-col justify-start items-center">
      {pokemon && <h1 className="text-4xl mb-4">{pokemon.name}</h1>}
      <div className="w-[1080px] flex flex-row justify-between items-center">
        <img
          src={
            pokemon === undefined
              ? UNDEFINED_IMAGE
              : pokemon?.sprites?.other['official-artwork']?.front_default
          }
          alt="pokemon"
          className="w-[360px] h-[360px] bg-poke-charcoal bg-opacity-25 rounded-lg shadow-lg"
        />
        <div className="w-[640px] h-[360px] py-8 bg-poke-golden-rod rounded-lg shadow-lg flex flex-col justify-between items-center">
          <div className="w-[640px] h-[52px] flex flex-row justify-start items-center">
            {pokemon && renderTypes(pokemon.types)}
          </div>
          <div className="w-[608px] h-[228px] bg-poke-saddle-brown-x2 bg-opacity-50 rounded-lg flex flex-row justify-around items-center">
            <div className="w-[256px] h-[228px] flex flex-col justify-start items-end">
              <p className="text-xl my-4">Base experience</p>
              <p className="text-xl mb-4">Height</p>
              <p className="text-xl mb-4">Weight</p>
            </div>
            <div className="w-[256px] h-[228px] flex flex-col justify-start items-start">
              <p className="text-xl my-4">
                {pokemon === undefined ? 'undefined' : pokemon.base_experience}
              </p>

              <p className="text-xl mb-4">
                {pokemon === undefined ? 'undefined' : pokemon.height}
              </p>

              <p className="text-xl mb-4">
                {pokemon === undefined ? 'undefined' : pokemon.weight}
              </p>
            </div>
          </div>
        </div>
      </div>

      {pokemon !== undefined && <StatsTab data={pokemon} />}
    </div>
  )
}

export default PokemonPage
