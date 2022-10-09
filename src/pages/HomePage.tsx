import React from 'react'

import PokemonCard from '../components/PokemonCard'
import Banner from '../assets/pokemon-logo.svg'

function HomePage() {
  return (
    <div className="md:w-full md:h-fit bg-poke-lemon-yellow flex flex-col justify-start items-center">
      <img
        src={Banner}
        alt="banner"
        className="w-[480px] h-[320px] rounded-tl-[240px] rounded-br-[240px] mt-28 mb-8"
      />
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8">
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />

        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </div>
    </div>
  )
}

export default HomePage
