import React from 'react'
import { PokemonDetail, Types } from '../interface';
import { colorPicker } from '../utils';

const InfoBox = ({ pokemon }: { pokemon: PokemonDetail | undefined }) => {
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

  return (
    <div className="w-[600px] h-[300px] py-4 bg-poke-golden-rod rounded-lg shadow-lg flex flex-col justify-around items-center">
      <div className="w-[600px] h-[52px] flex flex-row justify-start items-center">
        {pokemon && renderTypes(pokemon.types)}
      </div>

      <div className="w-[564px] h-[200px] bg-poke-saddle-brown-x2 bg-opacity-50 rounded-lg flex flex-col justify-around items-center">
        <div className='w-[500px] h-fit flex flex-row justify-around items-center'>
          <div className="w-[160px] text-xl font-medium flex flex-row justify-end">Base experience</div>
          <div className="w-[60px] text-xl flex flex-row justify-start">
            {pokemon === undefined ? 'undefined' : pokemon.base_experience}
          </div>
        </div>

        <div className='w-[500px] h-fit flex flex-row justify-around items-center'>
          <div className="w-[160px] text-xl font-medium flex flex-row justify-end">Height</div>
          <div className="w-[60px] text-xl flex flex-row justify-start">
            {pokemon === undefined ? 'undefined' : pokemon.height}

          </div>
        </div>

        <div className='w-[500px] h-fit flex flex-row justify-around items-center'>
          <div className="w-[160px] text-xl font-medium flex flex-row justify-end">Weight</div>
          <div className="w-[60px] text-xl flex flex-row justify-start">
            {pokemon === undefined ? 'undefined' : pokemon.weight}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoBox;