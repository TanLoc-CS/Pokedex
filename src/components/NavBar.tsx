import React, { useState } from 'react'
import PokeLogo from '../assets/navbar-logo.svg'

import data from './mockData'

function NavBar() {
  const [searchModal, setSearchModal] = useState('hidden')
  const [searchList, setSearchList] = useState(data)

  const filterData = (searchInput: string) => {
    if (searchInput !== '') {
      const filteredData = data.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchInput)
      )
      setSearchList(filteredData)
    } else setSearchList(data)
  }

  const handleChange = async (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    filterData(e.target.value)
  }

  return (
    <div className="md:w-full md:h-[80px] bg-poke-fire-brick md:flex md:flex-row justify-start items-center fixed">
      <img
        src={PokeLogo}
        alt="logo"
        className="w-[160px] h-[60px] rounded-2xl mx-4"
      />

      <form className="w-[360px] h-[56px] bg-white rounded-2xl flex flex-col justify-center items-center">
        <input
          type="text"
          placeholder="Search"
          className="w-[300px] h-[36px] outline-hidden bg-white focus:outline-none"
          onChange={(e) => handleChange(e)}
          onFocus={() => setSearchModal('block')}
          onBlur={() => setSearchModal('hidden')}
        />
        <div
          className={
            'md:w-[360px] md:h-[360px] bg-white absolute z-10 top-[72px] shadow-lg rounded-lg overflow-y-scroll flex flex-col justify-start items-center ' +
            searchModal
          }
        >
          {searchList &&
            searchList.map((pokemon) => (
              <div
                className="md:w-[332px] h-12 hover:bg-poke-lemon-yellow text-left pl-8"
                key={pokemon.name}
              >
                {pokemon.name}
              </div>
            ))}
        </div>
      </form>
    </div>
  )
}

export default NavBar
