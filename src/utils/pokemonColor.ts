const colorPicker = (type: string) => {
  switch (type) {
    case 'normal':
      return 'bg-normal'
    case 'fire':
      return 'bg-fire'
    case 'water':
      return 'bg-water'
    case 'electric':
      return 'bg-electric'
    case 'grass':
      return 'bg-grass'
    case 'ice':
      return 'bg-ice'
    case 'fighting':
      return 'bg-fighting'
    case 'poison':
      return 'bg-poison'
    case 'ground':
      return 'bg-ground'
    case 'flying':
      return 'bg-flying'
    case 'psychic':
      return 'bg-psychic'
    case 'bug':
      return 'bg-bug'
    case 'rock':
      return 'bg-rock'
    case 'ghost':
      return 'bg-ghost'
    case 'dragon':
      return 'bg-dragon'
    case 'dark':
      return 'bg-dark'
    case 'steel':
      return 'bg-steel'
    case 'fairy':
      return 'bg-fairy'

    default:
      return 'bg-black';
  }
}

export default colorPicker