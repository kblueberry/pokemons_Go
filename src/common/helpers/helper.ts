export function capitalizeFirstLetter(value) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function setColorHex(type: string) {
  switch (type) {
    case 'grass':
      return '#2fcc51';
    case 'fire':
      return '#c7591a';
    case 'poison':
      return '#ae5bb5';
    case 'flying':
    case 'water':
      return '#0af7f7';
    case 'bug':
      return '#d91838';
    default:
      return '#f7e80a';
  }
}

export function createPokemonAbility(prop: string, value) {
  const obj = {};
  obj[prop] = value
  return obj;
}
