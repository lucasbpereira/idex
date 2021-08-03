import Head from 'next/head'
import Link from 'next/link'
import MenuBar from '../MenuBar'

export default function Layout({title, children}) {
   
    return (
        <div className="bg-gray-100 flex flex-col">
            <Head>
                <title>Idex - {title}</title>
                <link rel="icon" href="/favicon.ico" />

            </Head>
            
                <MenuBar />
                <main className="block md:ml-64">
                    {children}
                </main>

                <footer className="text-gray-400 md:ml-64">
                    <p className="p-4">
                        Copyright © 2021 Idex; All rights reserved.
                    </p>
                    <p className="p-4">
                        Pokémon © 2002–2021 Pokémon. © 1995–2021 Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo. No copyright or trademark infringement is intended in using Pokémon content on Idex.
                    </p>

                    <p className="p-4 text-ice"><Link href="/">Read our Privacy Policy</Link></p>
                </footer>
            
        </div>
    )
}