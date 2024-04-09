import { lazy } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'

import Banner from '../assets/pokemon-logo.svg'
import { usePokemon } from '../hook/usePokemon';

const LazyPokemonCard = lazy(() => import('../components/PokemonCard'))

function HomePage() {
  const { pokedex, offset, fetchMorePokemon } = usePokemon();

  return (
    <div className="md:w-full md:h-fit bg-poke-lemon-yellow flex flex-col justify-start items-center">
      <img
        src={Banner}
        alt="banner"
        className="w-[480px] h-[320px] rounded-tl-[240px] rounded-br-[240px] mt-28 mb-8"
      />

      <InfiniteScroll
        className="grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8"
        dataLength={offset}
        hasMore
        loader={<h4>Loading...</h4>}
        next={fetchMorePokemon}
      >
        {pokedex.map((e) => (
          <LazyPokemonCard key={e.name} data={e} />
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default HomePage
