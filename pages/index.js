import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/home.module.scss'

export default function pokemon() {
    return (
        <Layout title="Home">

                <h1 className="w-full text-center">Conheça a Idex, sua mais nova Pokedex</h1>
                <div className={`h-screen ${styles.pokemonList}`}>

                <h2 className="w-full text-center">Escolha sua região</h2>
                <Link href="/pokedex/kanto"><a className={`${styles.pokemonCards} grass`}>Kanto</a></Link>
                <Link href="/pokedex/johto"><a className={`${styles.pokemonCards} water`}>Johto</a></Link>
                <Link href="/pokedex/hoenn"><a className={`${styles.pokemonCards} fire`}>Hoenn</a></Link>
                <Link href="/pokedex/sinnoh"><a className={`${styles.pokemonCards} ghost`}>Sinnoh</a></Link>
                <Link href="/pokedex/unova"><a className={`${styles.pokemonCards} normal`}>Unova</a></Link>
                <Link href="/pokedex/kalos"><a className={`${styles.pokemonCards} electric`}>Kalos</a></Link>
                <Link href="/pokedex/galar"><a className={`${styles.pokemonCards} fighting`}>Galar</a></Link>

            </div>
        </Layout>
    )
}