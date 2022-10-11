import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { PokemonProps, Types } from '../interface/index'
import colorPicker from '../utils/pokemonColor'

function renderPokeTypes(type: string) {
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

function addLeadingZeros(num: Number) {
  const totalLength = 3
  if (num < 0) {
    const withoutMinus = String(num).slice(1)
    return '-' + withoutMinus.padStart(totalLength, '0')
  }
  return String(num).padStart(totalLength, '0')
}

function PokemonCard(props: PokemonProps) {
  const { data } = props

  const [image, setImage] = useState()
  const [id, setID] = useState<number>(1)
  const [types, setTypes] = useState<Types>([])

  useEffect(() => {
    axios.get(data.url).then((res) => {
      setImage(res.data.sprites.front_default)
      setID(res.data.id)
      setTypes(res.data.types)
    })
  }, [])
  return (
    <div className="w-[300px] h-[360px] px-4 py-4 bg-white hover:bg-poke-golden-rod hover:rounded-lg hover:-translate-y-2 rounded-lg flex flex-col justify-start items-center">
      <Link to={`/pokemon/${id}`}>
        <div className="bg-slate-300">
          <img
            src={image}
            alt="pokemon"
            style={{ width: '240px', height: '240px' }}
          />
        </div>
        <div className="w-[240px] h-fit flex flex-row justify-start items-center">
          {id === undefined ? 'undefined' : '#' + addLeadingZeros(id)}
        </div>
      </Link>
      <div className="w-[240px] h-10 text-xl text-start font-medium">
        {data.name === undefined ? 'undefined' : data.name}
      </div>
      <div className="w-[240px] h-6 flex flex-row justify-start items-center">
        {types === undefined
          ? 'undefined'
          : types.map((type) => renderPokeTypes(type.type.name))}
      </div>
    </div>
  )
}

export default PokemonCard
