import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import { ChevronRight } from 'react-feather'


export default function RandomPokemon(props) {
    

    return (
        <section className={styles.spotlightPokemon} id={props.firstType} >      
            <div className={styles.headerInfo}>
            <strong>{props.name}</strong>
            <span>Nº{props.id}</span>
            </div>
            <div className={styles.headerInfo}>
                <ul className={styles.typeInfo}>
                {
                (props.types).map((typeInfo, index) => (
                    <li key={index} className={`${styles.list} ${typeInfo.type.name}`}>
                    <Image 
                        width={22} 
                        height={22} 
                        src={`/${typeInfo.type.name}.svg`}
                        alt={typeInfo.type.name} 
                        objectFit="scale-down" 
                        />
                        
                    {typeInfo.type.name}
                    </li>
                ))
                } 
                </ul>
                <Link href={`../../pokemon?search=${props.id}`}><a className="bg-gray-800 bg-opacity-25 flex align-center justify-center rounded-full px-4 py-1 shadow text-gray-50"> Show more <ChevronRight className="" /></a></Link>
            </div>
            

            <div className={styles.sprite}>
                <Image 
                width={480} 
                height={480} 
                src={props.image} 
                alt={props.name} 
                objectFit="scale-down" 
                />
            </div>
        </section> 
    )
}