import React from 'react'

function renderPokeTypes(type: string) {
  let bgColor = 'bg-white'
  switch (type) {
    case 'type 1':
      bgColor = 'bg-indigo-200'
      break

    default:
      bgColor = ' bg-amber-200'
      break
  }

  return (
    <div className={'w-20 h-5 text-sm mr-2 text-center rounded-lg ' + bgColor}>
      {type}
    </div>
  )
}

function PokemonCard() {
  return (
    <div className="w-[300px] h-[360px] px-4 py-4 bg-white hover:bg-poke-golden-rod hover:-translate-y-2 rounded-lg flex flex-col justify-start items-center">
      <div className="bg-slate-300">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt="pokemon"
          style={{ width: '240px', height: '240px' }}
        />
      </div>
      <div className="w-[240px] h-fit flex flex-row justify-start items-center">
        #001
      </div>
      <div className="w-[240px] h-10 text-xl text-start font-medium">
        Pokemon name
      </div>
      <div className="w-[240px] h-6 flex flex-row justify-start items-center">
        {renderPokeTypes('type 1')}
        {renderPokeTypes('type 2')}
      </div>
    </div>
  )
}

export default PokemonCard
