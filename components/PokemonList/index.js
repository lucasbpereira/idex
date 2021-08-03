import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import { Star, ChevronRight } from 'react-feather'

export default function PokemonList(props) {

  function favoritePokemon(poke) {
    JSON.parse(localStorage.setItem('poke', poke.name));
  }

    return (
        <ul className={`${styles.pokemonList} flex justify-center`}>
            {props.poke.map((poke) => (
              <li key={poke.id} className={styles.pokemonCards}> 
                  <a className={`border p-2 capitalize flex flex-col items-left rounded-lg ${poke.types[0].type.name}`}>
                    <div className="w-full flex justify-between">
                      <strong className="text-gray-50">{poke.name}</strong>
                      <span className="text-gray-50 text-opacity-60	">{poke.id}</span>
                    </div>
                    <ul>
                    {
                    poke['types'].map((typeInfo, index) => (
                      <li key={index} className={`${styles.types}`}>
                        <Image 
                          width={12} 
                          height={12} 
                          src={`/${typeInfo.type.name}.svg`}
                          alt={poke.name} 
                          objectFit="scale-down" 
                          />
                          
                        {typeInfo.type.name}
                      </li>
                    ))
                    } 
                    <button onClick={() => favoritePokemon(poke)} className={styles.favoriteIcon}><Star /></button>
                    <Link href={`../../pokemon?search=${props.id}`}><a className={styles.see}> See <ChevronRight className="text-xs" /></a></Link>

                    </ul>
                    

                    <div className={styles.sprites}>
                    <Image src={poke.sprites.other['official-artwork'].front_default} width={70} height={70} alt={props.name} />
                        
                    </div>
                  </a> 
              
              </li>
            ))}
          </ul>
    )
}