import React, { useEffect, useState } from 'react'
import { GraphQLClient, gql } from 'graphql-request'

import { PokedexGQL } from '../interface'
import PokeLogo from '../assets/navbar-logo.svg'

const PokeAPIquery = gql`
  {
    gen3_species: pokemon_v2_pokemonspecies(where: {}, order_by: { id: asc }) {
      id
      name
    }
  }
`

function NavBar() {
  const [pokedex, setPokedex] = useState<PokedexGQL>([])
  const [filteredData, setFilteredData] = useState<PokedexGQL>([])
  const [searchModal, setSearchModal] = useState('hidden')
  const client = new GraphQLClient('https://beta.pokeapi.co/graphql/v1beta')
  useEffect(() => {
    client.request(PokeAPIquery).then((res) => {
      setPokedex(res.gen3_species)
    })
  }, [])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const search = event.target.value
    const newFilter = pokedex.filter(
      (value) => value.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
    )
    if (search === '') setFilteredData(pokedex)
    else setFilteredData(newFilter)
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>) => {
    e.preventDefault()
    setTimeout(() => setSearchModal('hidden'), 500)
  }

  return (
    <div className="w-full md:h-[80px] bg-poke-fire-brick md:flex md:flex-row justify-start items-center fixed z-10">
      <a href="/">
        <img
          src={PokeLogo}
          alt="logo"
          className="w-[160px] h-[60px] rounded-2xl mx-4"
        />
      </a>
      <form className="md:w-[360px] h-[56px] bg-white rounded-2xl flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[300px] h-[36px] outline-hidden bg-white focus:outline-none"
          onChange={(e) => handleChange(e)}
          onFocus={() => setSearchModal('block')}
          onBlur={(e) => handleBlur(e)}
        />
        <div
          className={
            'md:w-[360px] md:h-[360px] bg-white absolute z-10 top-[72px] shadow-lg rounded-lg overflow-y-scroll flex flex-col justify-start items-center ' +
            searchModal
          }
        >
          {filteredData &&
            filteredData.map((pokemon) => (
              <a href={`/pokemon/${pokemon.id}`} key={pokemon.name}>
                <div
                  className="md:w-[332px] h-8 hover:bg-poke-lemon-yellow text-left pl-8 text-lg"
                  key={pokemon.name + Math.random()}
                >
                  {pokemon.name}
                </div>
              </a>
            ))}
        </div>
      </form>
    </div>
  )
}

export default NavBar
