import Layout from '../../components/Layout'
import RandomPokemon from '../../components/RandomPokemon'
import PokemonList from '../../components/PokemonList'

import { useState, useEffect } from 'react'


export default function Home({poke}) {
  const [randomId, setRandomId] = useState(650);

    useEffect(() => {
        setRandomId(Math.floor(Math.random() * (809 - 650 + 1)) + 650);
    }, []);

    const randomPoke = poke.find(poke => { return poke.id === randomId });

  return (
    <Layout title="Kalos">
      <RandomPokemon 
        firstType={randomPoke.types[0].type.name}
        name={randomPoke.name} 
        id={randomPoke.id} 
        types={randomPoke['types']}
        image={randomPoke.sprites.other['official-artwork'].front_default} />

      <PokemonList
        poke={poke}
        name={poke.name}
        id={poke.id}
        types={poke['types']}
        image={poke[0].sprites.other['official-artwork'].front_default}
      />
    </Layout>
    
  )
}


export async function getStaticProps(context) {
  try {
    const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

    const generatePokemonPromises = () => Array(160).fill().map((_, index) =>
      fetch(getPokemonUrl(index + 650)).then(response => response.json()))

    const pokemonPromises = generatePokemonPromises();

    const poke = Promise.all(pokemonPromises)
      .then(poke => {
        return poke
      })
    
    return {
      props: {
        poke: await poke,
      }
    }

  } catch (err) {
    console.error(err)
  }
  
}