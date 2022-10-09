import { useEffect } from 'react'
import axios from 'axios'

import StatsTab from '../components/StatsTab'

function PokemonInfo() {
  const id = '003'
  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/')
      .then((res) => console.log(res))
  }, [])

  return (
    <div className="pt-28 flex flex-col justify-start items-center">
      <div className="w-[1080px] flex flex-row justify-between items-center">
        <img
          src={
            'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/' +
            id +
            '.png'
          }
          alt="pokemon"
          className="w-[360px] h-[360px] bg-poke-charcoal bg-opacity-25 rounded-lg shadow-lg"
        />
        <div className="w-[640px] h-[360px] py-8 bg-poke-golden-rod rounded-lg shadow-lg flex flex-col justify-between items-center">
          <div className="w-[640px] h-[52px] flex flex-row justify-start items-center">
            <div className="w-[100px] h-10 bg-poke-harvest-gold flex flex-row justify-center items-center rounded-lg ml-4">
              Fire
            </div>
            <div className="w-[100px] h-10 bg-poke-harvest-gold flex flex-row justify-center items-center rounded-lg ml-4">
              Flying
            </div>
          </div>
          <div className="w-[640px] h-[228px] bg-poke-saddle-brown-x2 bg-opacity-50 rounded-lg flex flex-row justify-around items-center">
            <div className="w-[256px] h-[228px] flex flex-col justify-start items-end">
              <p className="text-xl my-4">Base experience</p>
              <p className="text-xl mb-4">Height</p>
              <p className="text-xl mb-4">Weight</p>
            </div>
            <div className="w-[256px] h-[228px] flex flex-col justify-start items-start">
              <p className="text-xl my-4">267</p>
              <p className="text-xl mb-4">17</p>
              <p className="text-xl mb-4">267</p>
            </div>
          </div>
        </div>
      </div>
      <StatsTab />
    </div>
  )
}

export default PokemonInfo
