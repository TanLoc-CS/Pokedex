import { Route, Routes } from 'react-router'

import routes from './pages'
import NavBar from './components/NavBar'
import './index.css'

function App() {
  return (
    <div className="w-screen h-screen bg-poke-lemon-yellow">
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
