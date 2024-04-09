export const addLeadingZeros = (num: number) => {
  const totalLength = 3
  if (num < 0) {
    const withoutMinus = String(num).slice(1)
    return '-' + withoutMinus.padStart(totalLength, '0')
  }
  return String(num).padStart(totalLength, '0')
}

export const capitalize = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export const colorPicker = (type: string) => {
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
