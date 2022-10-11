import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
  return (
    <div className="flex flex-col justify-center items-center pt-32">
      <img
        src="https://www.pngitem.com/pimgs/m/561-5616833_image-not-found-png-not-found-404-png.png"
        alt="not-found"
        className="w-[50%] h-auto"
      />
      <a
        href="/"
        className="w-36 h-16 mt-8 bg-poke-charcoal hover:bg-poke-dark-slate text-white hover:text-poke-lemon-yellow text-xl font-medium rounded-lg flex flex-col justify-center items-center"
      >
        Go Home
      </a>
    </div>
  )
}

export default PageNotFound
