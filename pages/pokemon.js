import Layout from '../components/Layout'

import Image from 'next/image'
import Link from 'next/link'

import { Disclosure } from '@headlessui/react'
import { Info, BarChart2, TrendingUp, Disc } from 'react-feather'

import styles from '../styles/pokemon.module.scss'

export default function pokemon({poke, pokeChain, pokeSpecies, allPoke}) {
    // const pokemonTypes = (poke.types).map((typeInfo) => (
    //     typeInfo.type.name
    // ))

    // const weaknessTypes = pokemonTypes.map(weakness => {
    //     switch(weakness) {
    //         case "bug":
    //             return ('fire, rock, flying');
    //         case "dark":
    //             return ('fairy, dark, fighting');
    //         case "dragon":
    //             return ('dragon, fairy, ice');
    //         case "electric":
    //             return ('ground');
    //         case "fairy":
    //             return ('steel, poison');
    //         case "fighting":
    //             return ('fairy, psychic, flying');
    //         case "fire":
    //             return ('water, rock, ground');
    //         case "flying":
    //             return ('electric, ice, rock');
    //         case "ghost":
    //             return ('ghost, dark');
    //         case "grass":
    //             return ('ice, fire, bug, poison, flying');
    //         case "ground":
    //             return ('water, ice, grass');
    //         case "ice":
    //             return ('steel, fire, fighting, rock');
    //         case "normal":
    //             return ('fighting');
    //         case "poison":
    //             return ('psychic, ground');
    //         case "psychic":
    //             return ('bug, ghost, dark');
    //         case "rock":
    //             return ('steel, water, fighting, grass, ground');
    //         case "steel":
    //             return ('fire, ground, fighting');
    //         case "water":
    //             return ('electric, grass');
    //         default:
    //             ''
    //     }
    // })    
   
    // var evoChain = [];    
    // var evoData = pokeChain.chain;

    // do {
    //     var evoDetails = evoData['evolution_details'][0];

    //     evoChain.push({
    //         "species_name": evoData.species.name,
    //         "min_level": !evoDetails ? 1 : evoDetails.min_level,
    //         "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
    //         "item": !evoDetails ? null : evoDetails.item,
    //       });

    //       evoData = evoData['evolves_to'][0];
    // } while (!!evoData && evoData.hasOwnProperty('evolves_to')); 
    
    // const evoChainWithId = evoChain.map((pokemon, index) => {
    //     const data =  allPoke.filter(function(pokeName) {
    //         if (pokeName.name == pokemon.species_name) {
    //             return pokeName
    //         }
    //     }
    //     );
        
    //     return { ...data[0], ...evoChain[index] }
    // })

    return (
        <Layout title={poke.name}>
            <section className={styles.spotlightPokemon} id={poke.types[0].type.name}>
                <div className={styles.headerInfo}>
                    <strong>{poke.name}</strong>
                    <span>Nº{poke.id}</span>
                </div>
                <ul className={styles.typeInfo}>
                {
                poke.types.map((typeInfo, index) => (
                    <li key={index} className={`${styles.list} ${typeInfo.type.name}`}>
                    <Image 
                        width={22} 
                        height={22} 
                        src={`/${typeInfo.type.name}.svg`}
                        alt={poke.name} 
                        objectFit="scale-down" 
                        />
                    {typeInfo.type.name}
                    </li>
                ))
                } 
                </ul>
                
                <div className={styles.sprite}>
                <Image 
                width={480} 
                height={480} 
                src={poke.sprites.other['official-artwork'].front_default} 
                alt={poke.name} 
                objectFit="scale-down" 
                />
            </div>
            </section>
            <section className={`w-full`}>
            <Disclosure>
                <Disclosure.Button className={`flex justify-between py-2 px-4 bg-${poke.types[0].type.name}-light w-full text-gray-50 focus:outline-none`}>
                    About
                    <Info />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 p-4">
                    <p>
                        {pokeSpecies.flavor_text_entries[3].flavor_text.replace('\f', '')}
                    </p>
                    <ul className={`${styles.typeInfo} w-full flex justify-between py-4`}>
                        <li className={`w-1/3 text-center border-r-2 font-semibold border-${poke.types[0].type.name} flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg`}>{poke.weight / 10} kg</span><small>Weight</small></li>
                        <li className={`w-1/3 text-center border-r-2 font-semibold border-${poke.types[0].type.name} flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg`}>{poke.height / 10} m</span> <small>Height</small></li>
                        <li className={`w-1/3 text-center font-semibold flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg`}>{pokeSpecies.genera[7].genus.split(' ')[0]}</span><small>Species</small></li>
                    </ul>
                    <ul className={`${styles.typeInfo} w-full flex justify-between py-4`}>
                        {poke.abilities.map((abilities, index) => (
                            <li key={index} className={`w-1/2 text-center font-semibold flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg capitalize v`}>{abilities.ability.name}</span></li>

                        ))}
                        {/* <li className={`w-1/2 text-center font-semibold flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg capitalize v`}>{poke.abilities[0].ability.name}</span></li>
                        <li className={`w-1/2 text-center font-semibold flex flex-col`}> <span className={`w-full text-${poke.types[0].type.name} text-lg capitalize v`}>{poke.abilities[1].ability.name}</span></li> */}
                    </ul>
                    <ul className={`${styles.typeInfo} w-full flex justify-start py-4 align-center`}>
                        <p className="w-1/3 font-bold text-gray-400 px-1">Weakness</p>
                        <p className="w-full capitalize">{weaknessTypes.join(', ')}</p>
                    </ul>
                </Disclosure.Panel>    
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className={`flex justify-between py-2 px-4 bg-${poke.types[0].type.name} w-full text-gray-50 focus:outline-none`}>
                    Stats
                    <BarChart2 />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500">
                <table className="w-full">
                    <tbody>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">HP</td>
                        <td className="w-auto font-bold text-gray-800 text-xs">{poke.stats[0].base_stat}</td>
                        <td className="w-full">
                            <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[0].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">ATK</td>
                        <td className="w-auto font-bold text-gray-800 text-xs">{poke.stats[1].base_stat}</td>
                        <td>
                            <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[1].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">DEF</td>
                        <td className="w-auto font-bold text-gray-800 text-xs">{poke.stats[2].base_stat}</td>
                        <td>
                        <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[2].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">S ATK</td>
                        <td className="w-auto font-bold text-gray-800 text-xs">{poke.stats[3].base_stat}</td>
                        <td>
                            <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[3].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">S DEF</td>
                        <td className="w-auto font-bold text-gray-800 text-xs">{poke.stats[4].base_stat}</td>
                        <td>
                            <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[4].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td className="w-1/4 font-bold text-gray-400 pl-1 text-xs">SPD</td>
                        <td className="w-auto font-bold text-gray-800 -mr-4 text-xs">{poke.stats[5].base_stat}</td>
                        <td>
                            <div className="relative pt-4">
                                <div style={{ width: "255px" }} className="transform scale-90 overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                    <div style={{ width: `${poke.stats[5].base_stat}px` }} className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-${poke.types[0].type.name}`}></div>
                                </div>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                    
                </table>
                </Disclosure.Panel>    
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className={`flex justify-between py-2 px-4 bg-${poke.types[0].type.name}-dark w-full text-gray-50 focus:outline-none`}>
                    Evolution
                    <TrendingUp />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 flex">
                    {evoChainWithId.map((evoInfo, index) => (
                        <ul key={index} className="w-1/3 p-4">
                            <Link href={`../pokemon/?search=${evoInfo.species_name}`}>
                                <a>
                                    <li className="flex justify-center">
                                        <img 
                                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${evoInfo.order}.png`}
                                            alt={evoInfo.species_name} 
                                            objectFit="scale-down" 
                                        />
                                        </li>
                                        <li className="text-center"> 
                                            <p className="capitalize">
                                                <strong className="block md:inline">{evoInfo.order}# </strong>{} 
                                            </p>
                                            <i className="block">
                                                {evoInfo.min_level === null ? evoInfo.trigger_name : `at level ${evoInfo.min_level}`}
                                            </i>
                                    </li>
                                </a>
                            </Link>
                        </ul>
                    ))}
                </Disclosure.Panel>    
            </Disclosure>
            <Disclosure>
                <Disclosure.Button className={`flex justify-between py-2 px-4 bg-${poke.types[0].type.name} w-full text-gray-50 focus:outline-none`}>
                    Moves
                    <Disc />
                </Disclosure.Button>
                <Disclosure.Panel className="text-gray-500 flex">
                <table className="w-full m-4">
                    <thead>
                    <tr>
                        <td className="font-bold text-gray-400">Move Name</td>
                        <td className="font-bold text-gray-400">Level learned</td>
                        <td className="font-bold text-gray-400">Method</td>
                    </tr>
                    </thead>
                    <tbody>
                        {poke.moves.map((pokeMoves, index) => (
                        <tr className={`w-full p-2 text-${poke.types[0].type.name} capitalize`} key={index}>
                            <td><span>{pokeMoves.move.name.replace('-', ' ')}</span></td>
                            <td><strong>lvl {pokeMoves.version_group_details[0].level_learned_at}</strong> </td>
                            <td><i>{pokeMoves.version_group_details[0].move_learn_method.name}</i></td>
                        </tr>))}
                    </tbody>
                </table>
                </Disclosure.Panel>    
            </Disclosure>
            </section>
        </Layout>
    )
}

export async function getServerSideProps({query}) {
    const search = query.search;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`);
        const poke = await res.json();

        const resSpecies = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${search}`)
        const pokeSpecies = await resSpecies.json();

        const chainUrl = pokeSpecies.evolution_chain.url;

        const resPokemon = await fetch(chainUrl);
        const pokeChain = await resPokemon.json();

        const resAllPoke = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
        const {results} = await resAllPoke.json();
        const allPoke = results.map((pokemon, index) => {
            const order = index + 1;

            return { order, ...pokemon}
        })
        
        
        return {
            props: { poke, pokeChain, pokeSpecies, allPoke }
        }
    } catch (err) {
        console.error(404)
    }
}