import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { PokemonProps } from '../interface/index'
import { colorPicker, addLeadingZeros } from '../utils'
import { usePokemon } from '../hook/usePokemon'


function PokemonCard(props: PokemonProps) {
  const { data } = props;
  const { pokemonCard, getPokemonCard } = usePokemon();

  useEffect(() => {
    getPokemonCard(data.url);
  }, []);

  const renderPokeTypes = (type: string) => {
    const bgColor = colorPicker(type)

    return (
      <div
        key={type}
        className={'w-20 h-5 text-sm mr-2 text-center rounded-lg ' + bgColor}
      >
        {type}
      </div>
    )
  }

  return (
    <div className="w-[300px] h-[360px] px-4 py-4 bg-white hover:bg-poke-golden-rod hover:rounded-lg hover:-translate-y-2 rounded-lg flex flex-col justify-start items-center">
      <Link to={`/pokemon/${pokemonCard.id}`}>
        <div className="bg-slate-300">
          <img
            src={pokemonCard.image}
            alt="pokemon"
            style={{ width: '240px', height: '240px' }}
          />
        </div>
        <div className="w-[240px] h-fit flex flex-row justify-start items-center">
          {pokemonCard.id === undefined ? 'undefined' : '#' + addLeadingZeros(pokemonCard.id)}
        </div>
      </Link>
      <div className="w-[240px] h-10 text-xl text-start font-medium">
        {data.name === undefined ? 'undefined' : data.name}
      </div>
      <div className="w-[240px] h-6 flex flex-row justify-start items-center">
        {pokemonCard.types === undefined
          ? 'undefined'
          : pokemonCard.types.map((type) => renderPokeTypes(type.type.name))}
      </div>
    </div>
  )
}

export default PokemonCard
