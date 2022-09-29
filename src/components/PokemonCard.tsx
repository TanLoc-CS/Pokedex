import React from 'react'

function PokemonCard() {
  return (
    <div className="w-[300px] h-[360px] px-2 py-4 bg-white hover:bg-slate-50 hover:-translate-y-1 rounded-lg flex flex-col items-center justify-start">
      <div className="bg-slate-300">
        <img
          src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"
          alt=""
        />
      </div>
      <div>hello</div>
      <div>my types</div>
    </div>
  )
}

export default PokemonCard
