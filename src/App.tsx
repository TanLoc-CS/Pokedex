import { Route, Routes } from 'react-router'

import routes from './routes'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="md:w-full md:h-[1080px] bg-poke-lemon-yellow">
      <NavBar />
      <Routes>
        {routes.map((route) => {
          const Page = route.component
          return <Route path={route.path} element={<Page />} key={route.path} />
        })}
      </Routes>
    </div>
  )
}

export default App
