import { useState, SyntheticEvent } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import { PokemonDetail } from '../interface'

interface Props {
  data: PokemonDetail
}

const renderProgressBar = (figure: number, name: string) => {
  const progressBarValue = `${Math.round((figure * 100) / 300)}%`

  return (
    <div
      key={name}
      className="w-[600px] h-5 bg-gray-200 rounded-full dark:bg-gray-700"
    >
      <div
        className="h-5 text-xs font-medium text-blue-100 text-center bg-poke-saddle-brown bg-opacity-75 rounded-full dark:bg-blue-500"
        style={{ width: `${progressBarValue}` }}
      >
        {figure.toString() + '/300'}
      </div>
    </div>
  )
}

const renderMove = (name: string) => (
  <div
    key={name}
    className="w-[240px] h-[140px] bg-white hover:bg-poke-saddle-brown hover:text-white rounded-lg shadow-lg overflow-auto flex flex-col justify-center items-center text-xl font-medium"
  >
    {name}
  </div>
)

function StatsTab(pokemon: Props) {
  const [tab, setTab] = useState<String>('stats')
  const { data } = pokemon
  const { stats, moves } = data
  const handleChange = (event: SyntheticEvent, newValue: String) => {
    setTab(newValue)
  }

  return (
    <>
      <Box className="mt-8 mr-[1360px]">
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="inherit"
          aria-label="inherit tabs"
          className="bg-poke-lemon-yellow rounded-lg"
        >
          <Tab value="stats" label="Stats" />
          <Tab value="moves" label="Moves" />
        </Tabs>
      </Box>
      <div
        className={
          'md:w-[1600px] h-[300px] bg-poke-charcoal rounded-lg shadow-lg flex flex-row justify-start items-center ' +
          (tab === 'stats' ? 'block' : 'hidden')
        }
      >
        <div className="h-[200px] flex flex-col justify-between items-end text-slate-100 ml-8">
          <p className="h-6 font-medium">HP</p>
          <p className="h-6 font-medium">ATTACK</p>
          <p className="h-6 font-medium">DEFENSE</p>
          <p className="h-6 font-medium">SPECIAL ATTACK</p>
          <p className="h-6 font-medium">SPECIAL DEFENSE</p>
          <p className="h-6 font-medium">SPEED</p>
        </div>
        <div className="h-[200px] flex flex-col justify-between items-start ml-8">
          {stats.map((stat) =>
            renderProgressBar(stat.base_stat, stat.stat.name)
          )}
        </div>
      </div>
      <div
        className={
          'p-8 md:w-[1600px] h-[360px] bg-poke-charcoal rounded-lg shadow-lg grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 overflow-x-hidden overflow-y-scroll ' +
          (tab === 'stats' ? 'hidden' : 'block')
        }
      >
        {moves.map((move) => renderMove(move.move.name))}
      </div>
    </>
  )
}

export default StatsTab
