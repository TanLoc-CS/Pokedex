import React, { useState } from 'react'
import { PokemonDetail } from '../interface';

const StatsBox = ({ pokemon }: { pokemon: PokemonDetail | undefined }) => {
  const [view, setView] = useState<string>('stats');

  const renderProgressBar = (figure: number, name: string) => {
    const progressBarValue = `${Math.round((figure / 260) * 360)}px`

    return (
      <div
        key={name}
        className="w-[360px] h-5 bg-gray-200 rounded-full dark:bg-gray-700"
      >
        <div
          className='h-5 text-xs font-medium text-blue-100 text-center bg-opacity-75 rounded-full dark:bg-[#bf4342]'
          style={{ width: progressBarValue }}
        >
          {figure.toString() + '/260'}
        </div>
      </div>
    )
  }

  const renderMove = (name: string) => (
    <div
      key={name}
      className="w-[160px] h-[80px] bg-white rounded-lg shadow-lg overflow-auto flex flex-col justify-center items-center font-medium"
    >
      {name}
    </div>
  )

  return (
    <div className='w-[600px] h-[360px]'>
      <div className='w-fit h-fit flex-row'>
        <button
          className={`w-[80px] h-[40px] mr-[2px] rounded-t-lg shadow-lg ${view === 'stats' ? 'bg-[#d4c7b0]' : 'bg-slate-50 hover:bg-slate-200 active:bg-[#d4c7b0]'} `}
          type='button'
          onClick={() => setView('stats')}
        >
          STATUS
        </button>
        <button
          className={`w-[80px] h-[40px] mr-[2px] rounded-t-lg shadow-lg ${view === 'moves' ? 'bg-[#d4c7b0]' : 'bg-slate-50 hover:bg-slate-200 active:bg-[#d4c7b0]'} `}
          type='button'
          onClick={() => setView('moves')}
        >
          MOVES
        </button>
      </div>

      <div
        className={
          'md:w-[600px] h-[320px] bg-[#d4c7b0] rounded-b-lg rounded-tr-lg shadow-lg flex flex-row justify-start items-center ' +
          (view === 'stats' ? 'block' : 'hidden')
        }
      >
        <div className="h-[200px] flex flex-col justify-between items-end ml-8">
          <p className="h-6 font-medium">HP</p>
          <p className="h-6 font-medium">ATTACK</p>
          <p className="h-6 font-medium">DEFENSE</p>
          <p className="h-6 font-medium">SPECIAL ATTACK</p>
          <p className="h-6 font-medium">SPECIAL DEFENSE</p>
          <p className="h-6 font-medium">SPEED</p>
        </div>
        <div className="h-[200px] flex flex-col justify-between items-start ml-8">
          {pokemon?.stats.map((stat) =>
            renderProgressBar(stat.base_stat, stat.stat.name)
          )}
        </div>
      </div>
      <div
        className={
          'p-8 md:w-[600px] h-[320px] bg-[#d4c7b0] rounded-b-lg rounded-tr-lg shadow-lg grid md:grid-cols-3 sm:grid-cols-2 gap-8 overflow-x-hidden overflow-y-scroll ' +
          (view === 'stats' ? 'hidden' : 'block')
        }
      >
        {pokemon?.moves.map((move) => renderMove(move.move.name))}
      </div>
    </div>
  )
}

export default StatsBox;