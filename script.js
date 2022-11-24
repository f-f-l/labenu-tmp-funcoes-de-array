const pokemons = [
  { nome: 'Bulbasaur', tipo: 'grama', vida: 40 },
  { nome: 'Bellsprout', tipo: 'grama', vida: 20 },
  { nome: 'Charmander', tipo: 'fogo', vida: 35 },
  { nome: 'Vulpix', tipo: 'fogo', vida: 25 },
  { nome: 'Squirtle', tipo: 'água', vida: 45 },
  { nome: 'Psyduck', tipo: 'água', vida: 25 },
]

const recuperarVida = (obj) => {
  const novoObj = {
    ...obj,
    vida: 100,
  }
  return novoObj
}

const pokemonsComVidaRecuperada = pokemons.map(recuperarVida)

const pokemonsDeFogo = pokemons.filter((el) => {
  return el.tipo === 'fogo'
})

const pokemonsDeFogoComVidaRecuperada = pokemonsComVidaRecuperada.filter(
  (el) => {
    return el.tipo === 'fogo'
  }
)

console.log('\n(obj) = \n\n', pokemons)
console.log('\n(novoObj) = \n\n', pokemonsComVidaRecuperada)
console.log('\nLista original de pokémons:\n\n', pokemons)
console.log('\nNova lista de pokémons:\n\n', pokemonsComVidaRecuperada)

console.log(
  'Pokémon com vida recuperada na primeira posição:\n\n',
  pokemonsComVidaRecuperada[0]
)

console.log(
  'Pokémon com vida recuperada na segunda posição:\n\n',
  pokemonsComVidaRecuperada[0]
)

console.log('Pokémons do tipo fogo:\n\n', pokemonsDeFogo)
console.log('Pokémon do tipo fogo na primeira posição:\n\n', pokemonsDeFogo[0])
console.log('Pokémon do tipo fogo na segunda posição:\n\n', pokemonsDeFogo[1])

console.log(
  'Pokémons do tipo fogo com a vida recuperada:\n\n',
  pokemonsDeFogoComVidaRecuperada
)

console.log(
  'Pokémon do tipo fogo na primeira posição:\n\n',
  pokemonsDeFogoComVidaRecuperada[0]
)

console.log(
  'Pokémon do tipo fogo na segunda posição:\n\n',
  pokemonsDeFogoComVidaRecuperada[1]
)
