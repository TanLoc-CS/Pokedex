import PokeLogo from '../assets/navbar-logo.svg'

function NavBar() {
  return (
    <div className="md:w-screen md:h-[60px] bg-poke-fire-brick">
      <img
        src={PokeLogo}
        alt="logo"
        className="w-[160px] h-[60px] rounded-2xl"
      />
    </div>
  )
}

export default NavBar
