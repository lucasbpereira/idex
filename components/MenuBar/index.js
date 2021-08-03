import React from 'react'
import Link from 'next/link'

import { Menu, X, Search, ChevronDown } from 'react-feather'
import { useState } from 'react'
import { Transition } from "@headlessui/react"


import useBreakpoint from '../../hooks/useBreakpoint'

import styles from './styles.module.scss'

export default function MenuBar() {
    const [isOpen, setOpen] = useState(false);
    const [dropdown, setDropdown] = useState(false);

    const isStatic = useBreakpoint('sm')
    return (
        <div>
            <Transition
                    show={isStatic || isOpen}
                    enter="transition-all duration-500 ease"
                    enterFrom="-ml-64"
                    enterTo="ml-0"
                    leave="transition-all duration-500 ease-out"
                    leaveTo="-ml-64"
                >
                    <aside className={`fixed bg-gray-800 w-64 min-h-screen flex flex-col z-30 ${isStatic ? '' : 'fixed'}`}>
                        <ul className="flex-grow text-gray-50 bg-gray-800">
                            <li className="ml-4 my-1 h-20 flex justify-between">
                                <Link href="/">
                                    <a className="flex  items-center">
                                        <img src="/logo.svg" alt="logo Idex" className="w-12" />
                                        <h1 className="text-4xl hidden md:block">Idex</h1>
                                    </a>
                                </Link>
                                <button
                                    tabIndex="1"
                                    aria-label="Close Menu"
                                    title="Close Menu"
                                    className="w-6 mr-4 md:hidden" 
                                    onClick={() => setOpen(false)} >
                                    <X />
                                </button>
                            </li>
                            <li className={`flex ml-4 my-1 p-2 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow 
                                            ${styles.iconMenu}`}>
                                <Link href="/">
                                    <a className="listMenu">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 1024 1024">
                                    <path id="pkmn-go-menu"
                                            fill="rgba(255, 255, 255, 0.3)" stroke="none" strokeWidth="1"
                                            d="M 512.00,359.18
                                            C 512.00,359.18 512.00,359.18 512.00,359.18
                                                596.40,359.18 664.81,427.60 664.82,512.00
                                                664.82,512.00 664.82,512.00 664.82,512.00
                                                664.82,596.40 596.40,664.81 512.00,664.82
                                                512.00,664.82 512.00,664.82 512.00,664.82
                                                427.60,664.82 359.19,596.40 359.18,512.00
                                                359.18,512.00 359.18,512.00 359.18,512.00
                                                359.18,427.60 427.60,359.18 512.00,359.18
                                                512.00,359.18 512.00,359.18 512.00,359.18
                                                512.00,359.18 512.00,359.18 512.00,359.18 Z
                                            M 512.00,410.12
                                            C 455.73,410.12 410.12,455.73 410.12,512.00
                                                410.12,568.27 455.73,613.88 512.00,613.88
                                                568.27,613.88 613.88,568.27 613.88,512.00
                                                613.88,455.73 568.27,410.12 512.00,410.12
                                                512.00,410.12 512.00,410.12 512.00,410.12 Z
                                            M 806.16,217.84
                                            C 884.17,295.86 928.00,401.67 928.00,512.00
                                                928.00,622.33 884.17,728.14 806.16,806.16
                                                728.14,884.17 622.33,928.00 512.00,928.00
                                                401.67,928.00 295.86,884.17 217.84,806.16
                                                139.83,728.14 96.00,622.33 96.00,512.00
                                                96.00,401.67 139.83,295.86 217.84,217.84
                                                295.86,139.83 401.67,96.00 512.00,96.00
                                                622.33,96.00 728.14,139.83 806.16,217.84 Z
                                            M 332.02,512.00
                                            C 332.02,512.00 138.45,512.00 138.45,512.00
                                                138.45,611.07 177.81,706.09 247.86,776.14
                                                317.91,846.19 412.93,885.55 512.00,885.55
                                                611.07,885.55 706.09,846.19 776.14,776.14
                                                846.19,706.09 885.55,611.07 885.55,512.00
                                                885.55,512.00 885.55,512.00 885.55,512.00
                                                885.55,512.00 691.98,512.00 691.98,512.00
                                                691.98,412.60 611.40,332.02 512.00,332.02
                                                412.60,332.02 332.02,412.60 332.02,512.00 Z" />
                                    </svg>Home
                                    </a>
                                </Link>
                            </li>
                            <li className={`flex ml-4 my-1 p-2 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow
                                            ${styles.iconMenu}`}>
                                <Link href="/walkthrough">
                                    <a className="listMenu">
                                        <svg version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 5115 5115">
                                            <metadata id="CorelCorpID_0Corel-Layer"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M2567 96c687,0 1309,278 1759,728 450,450 728,1072 728,1759 0,687 -278,1309 -728,1759 -450,450 -1072,728 -1759,728 -687,0 -1309,-278 -1759,-728 -450,-450 -728,-1072 -728,-1759 0,-687 278,-1309 728,-1759 450,-450 1072,-728 1759,-728zm1559 928c-399,-399 -950,-646 -1559,-646 -609,0 -1160,247 -1559,646 -399,399 -646,950 -646,1559 0,609 247,1160 646,1559 399,399 950,646 1559,646 609,0 1160,-247 1559,-646 399,-399 646,-950 646,-1559 0,-609 -247,-1160 -646,-1559z"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M2917 2958l-1614 740c-71,32 -154,1 -186,-69 -22,-48 -15,-101 14,-141l0 0 1005 -1383c18,-25 43,-42 71,-51 5,-3 11,-6 17,-9l0 0 1637 -721c71,-31 154,1 186,72 23,52 12,109 -23,149l-1019 1360c-22,29 -53,48 -87,54zm-623 -24c-105,-64 -178,-168 -205,-286l-414 570 619 -284zm419 -798c140,62 237,190 262,337l507 -676 -769 339z"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M4147 2428l-1 -11c-33,-312 -152,-596 -350,-840l-137 112c167,205 271,442 306,704 2,17 4,35 6,52l176 -17zm-402 -909c-210,-233 -485,-399 -789,-475l-42 171c270,68 514,215 700,422l131 -119zm-1344 -515c-311,33 -596,153 -839,350l-9 8 113 135 7 -6c216,-176 469,-282 746,-311l-19 -175zm-1208 783c-157,271 -229,582 -210,895l0 2 176 -12c-3,-41 -3,-86 -2,-128 7,-236 71,-465 189,-669l-153 -88zm-78 1438c58,132 133,252 224,363 109,132 232,242 376,335l94 -149c-127,-81 -238,-180 -334,-297 -81,-100 -147,-206 -199,-324l-161 72zm1116 909l28 6c300,58 605,32 890,-79l-65 -164c-259,102 -543,124 -815,65l0 0 -37 172zm1392 -366c235,-209 401,-481 481,-785l-171 -43 -2 8c-72,268 -217,505 -425,689l118 131z"/>
                                        </svg>Walkthrough
                                    </a>
                                </Link>
                            </li>
                            <li className={`flex justify-between ml-4 my-1 p-2 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-100 hover:text-gray-800
                                            ${styles.iconMenu}`} onClick={() => setDropdown(!dropdown)}>
                                <span>
                                    <svg version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 5115 5115">
                                            <metadata id="CorelCorpID_0Corel-Layer"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1560 189l1999 0 0 -1c197,0 375,80 505,210 129,129 209,308 209,505l1 0 -1 0 0 3135 1 0c0,197 -80,375 -210,505 -129,129 -308,210 -505,210l0 -1 -1999 0 0 1c-197,0 -375,-80 -505,-210 -129,-129 -210,-308 -210,-505l1 0 0 -3134 -1 0c0,-197 80,-375 210,-505 129,-129 308,-209 505,-209l0 -1 0 1zm-433 1351l865 -34 374 -566 1626 0 0 -37 -1 0 1 0c0,-118 -49,-226 -128,-305 -78,-78 -186,-127 -305,-127l0 -1 -1999 0 0 1 0 -1c-118,0 -226,49 -305,128 -78,78 -127,186 -127,305l-1 0 0 637zm2865 -319l-1474 0 -370 560 -1021 40 0 2216 1 0c0,119 49,227 127,305 78,78 186,127 305,127l0 1 1999 0 0 -1c119,0 227,-49 305,-127 78,-78 127,-186 127,-305l1 0 0 -2816z"/>
                                            <polygon fill="rgba(255, 255, 255, 0.3)" points="1642,2069 3455,2069 3455,3277 1642,3277 "/>
                                            <path fill="rgba(255, 255, 255, 0.3)" d="M1909 3540c114,31 181,147 151,261 -31,114 -147,181 -261,151 -114,-31 -181,-147 -151,-261 31,-114 147,-181 261,-151z"/>
                                            <polygon fill="rgba(255, 255, 255, 0.3)" points="2848,4205 2848,3974 2617,3974 2617,3654 2848,3654 2848,3423 3168,3423 3168,3654 3399,3654 3399,3974 3168,3974 3168,4205 "/>
                                            <path fill="rgba(255, 255, 255, 0.3)" d="M2502 582c47,13 76,61 63,109 -13,47 -61,76 -109,63 -47,-13 -76,-61 -63,-109 13,-47 61,-76 109,-63z"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" d="M2817 574c47,13 76,61 63,109 -13,47 -61,76 -109,63 -47,-13 -76,-61 -63,-109 13,-47 61,-76 109,-63z"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" d="M3132 566c47,13 76,61 63,109 -13,47 -61,76 -109,63 -47,-13 -76,-61 -63,-109 13,-47 61,-76 109,-63z"/>
                                            <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1771 594c111,30 199,102 253,195 53,92 71,205 42,315 -30,111 -102,199 -195,253 -92,53 -205,71 -315,42 -111,-30 -199,-102 -253,-195 -53,-92 -71,-205 -42,-315 30,-111 102,-199 195,-253 92,-53 205,-71 315,-42zm9 335c-17,-29 -46,-53 -82,-62 -36,-10 -73,-4 -103,13 -29,17 -53,46 -62,82 -10,36 -4,73 13,103 17,29 46,53 82,62 36,10 73,4 103,-13 29,-17 53,-46 62,-82 10,-36 4,-73 -13,-103z"/>
                                    </svg> Pokedex
                                </span>
                                {dropdown ? <ChevronDown className="transform -rotate-90" /> : <ChevronDown className="transition-transform" />}
                            </li>
                            <Transition
                                show={dropdown}
                                enter="transition-all duration-500 ease"
                                enterFrom="-mt-32 opacity-0"
                                enterTo="mt-0 opacity-100"
                                leave="transition-all duration-500 ease-out"
                                leaveTo="-mt-32 opacity-0"
                            >                           
                            <ul className="block w-full">
                            <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/">All</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/kanto">Kanto</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/johto">Johto</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/hoenn">Hoenn</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/sinnoh">Sinnoh</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/unova">Unova</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/kalos">Kalos</Link></li>
                                <li className="ml-4 my-1 px-4 py-1 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow"><Link href="/pokedex/galar">Galar</Link></li>
                            </ul>
                            </Transition>

                            <li className={`flex ml-4 my-1 p-2 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow 
                                            ${styles.iconMenu}`}>
                                <Link href="/">
                                    <a className="listMenu">
                                    <svg version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 5115 5115">
                                        <metadata id="CorelCorpID_0Corel-Layer"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M613 1164l3871 0c186,0 355,76 477,198 122,122 198,291 198,477l0 1081c0,186 -76,355 -198,477 -122,122 -291,198 -477,198l-3871 0c-186,0 -355,-76 -477,-198 -122,-122 -198,-291 -198,-477l0 -1081c0,-186 76,-355 198,-477 122,-122 291,-198 477,-198zm3871 282l-3871 0c-108,0 -207,44 -278,116 -71,71 -116,170 -116,278l0 1081c0,108 44,207 116,278 71,71 170,116 278,116l3871 0c108,0 207,-44 278,-116 71,-71 116,-170 116,-278l0 -1081c0,-108 -44,-207 -116,-278 -71,-71 -170,-116 -278,-116z"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1251 2161l103 0 316 165 0 -165 103 0 0 506 -103 0 0 -232 -316 -164 0 397 -103 0 0 -506zm664 0l431 0 0 90 -329 0 0 101 291 0 0 85 -291 0 0 141 335 0 0 90 -438 0 0 -506zm487 0l112 0 137 327 32 79 25 -79 51 -119 -91 -208 106 0 37 99 35 -99 106 0 -91 208 52 122 31 77 24 -78 138 -328 112 0 -224 506 -102 0 -45 -100 -37 -98 -37 98 -46 100 -102 0 -224 -506zm917 356c18,10 37,20 56,28 19,8 38,15 59,21 20,6 42,10 64,13 22,3 46,5 71,5 30,0 56,-2 78,-6 21,-4 39,-10 52,-16 14,-7 23,-15 30,-25 6,-10 9,-20 9,-32 0,-18 -8,-33 -23,-44 -15,-11 -39,-16 -71,-16 -14,0 -29,1 -44,3 -15,2 -31,4 -47,6 -16,2 -32,4 -47,6 -15,2 -30,3 -44,3 -23,0 -44,-3 -65,-9 -21,-6 -39,-14 -55,-26 -16,-12 -29,-26 -38,-44 -10,-18 -14,-38 -14,-61 0,-14 2,-28 6,-41 4,-14 10,-27 18,-39 8,-12 19,-24 32,-35 13,-11 29,-20 48,-28 19,-8 40,-14 65,-18 24,-4 52,-7 84,-7 23,0 45,1 68,4 23,2 45,6 67,11 22,5 43,10 63,16 20,6 39,14 56,21l-45 83c-14,-6 -30,-12 -46,-17 -16,-5 -34,-10 -52,-14 -18,-4 -37,-7 -56,-9 -19,-2 -39,-3 -58,-3 -28,0 -52,2 -70,6 -18,4 -33,9 -44,16 -11,6 -18,13 -22,21 -4,8 -6,16 -6,23 0,15 7,28 20,37 14,10 34,14 62,14 11,0 24,-1 39,-2 15,-2 30,-3 46,-5 16,-2 33,-4 49,-5 17,-2 33,-2 49,-2 30,0 56,3 79,10 23,7 42,16 58,29 16,13 27,27 35,45 8,18 12,37 12,59 0,29 -7,55 -20,78 -13,23 -33,42 -58,58 -25,16 -55,28 -90,36 -35,8 -74,12 -118,12 -29,0 -56,-2 -84,-5 -27,-4 -53,-9 -78,-15 -25,-7 -49,-14 -71,-24 -23,-9 -43,-19 -63,-30l55 -83z"/>
                                        <polygon fill="rgba(255, 255, 255, 0.3)" points="3180,3233 2548,3864 1917,3233 "/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M3280 3333l-632 632c-55,55 -144,55 -200,0l-632 -632 200 -200 532 532 532 -532 200 200z"/>
                                    </svg>News
                                    </a>
                                </Link>
                            </li>
                            <li className={`flex ml-4 my-1 p-2 rounded-l cursor-pointer transition-all
                                            hover:bg-gray-50 hover:text-gray-800 hover:drop-shadow 
                                            ${styles.iconMenu}`}>
                                <Link href="/">
                                    <a className="listMenu">
                                    <svg version="1.1" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 5115 5115">
                                        <metadata id="CorelCorpID_0Corel-Layer"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M4413 3076l-59 0 0 1216 59 0c16,0 31,-7 42,-17 11,-11 17,-25 17,-42l0 -1099c0,-16 -7,-31 -17,-41 -11,-11 -25,-17 -41,-17zm-4026 -282l41 0 0 -486c0,-489 200,-933 522,-1255 219,-219 494,-381 801,-463 74,-141 287,-471 670,-471 407,0 593,356 646,480 293,84 556,243 766,453 322,322 522,766 522,1255l0 486 59 0c94,0 179,38 241,100 62,62 100,147 100,241l0 1099c0,94 -38,179 -100,240l-1 1c-62,62 -147,100 -240,100l-102 0c-39,111 -102,211 -184,292 -140,140 -333,227 -546,227l-2380 0c-213,0 -406,-87 -546,-227 -82,-82 -145,-181 -184,-292l-84 0c-94,0 -179,-38 -240,-100l-1 -1c-62,-62 -100,-147 -100,-240l0 -1099c0,-94 38,-179 100,-241 62,-62 147,-100 241,-100zm323 76c11,21 18,45 18,70l0 1489c0,6 0,12 -1,19 23,84 67,160 128,220 89,89 212,144 347,144l2380 0c135,0 258,-55 347,-144 89,-89 144,-212 144,-347l0 -1381 0 -632c0,-411 -168,-784 -439,-1055 -271,-271 -644,-439 -1055,-439l-373 0c-411,0 -784,168 -1055,439 -271,271 -439,644 -439,1055l0 562zm-282 1423l0 -740 0 -476 -41 0c-16,0 -31,7 -41,17 -11,11 -17,25 -17,41l0 1099c0,16 7,31 17,42 11,11 25,17 42,17l41 0zm2272 -3757c-63,-71 -154,-133 -280,-133 -121,0 -216,60 -287,131 24,-1 47,-1 71,-1l373 0c41,0 82,1 123,4z"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1746 2754l1363 0c189,0 361,77 486,202 125,125 202,297 202,486l0 415c0,189 -77,361 -202,486 -125,125 -297,202 -486,202l-1363 0c-189,0 -361,-77 -486,-202 -125,-125 -202,-297 -202,-486l0 -415c0,-189 77,-361 202,-486 125,-125 297,-202 486,-202zm1363 282l-1363 0c-111,0 -213,46 -286,119 -74,74 -119,175 -119,286l0 415c0,111 46,213 119,286 74,74 175,119 286,119l1363 0c111,0 213,-46 286,-119 74,-74 119,-175 119,-286l0 -415c0,-111 -46,-213 -119,-286 -74,-74 -175,-119 -286,-119z"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1522 3991l2 141 -282 3 -2 -141 282 -3zm1975 -22l2 141 -282 3 -2 -141 282 -3zm-988 11l2 141 -282 3 -2 -141 282 -3z"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" fillRule="nonzero" d="M1357 2322c0,78 -63,141 -141,141 -78,0 -141,-63 -141,-141 0,-4 -17,-1233 1345,-1233 1363,0 1344,1263 1344,1267 0,78 -63,141 -141,141 -78,0 -141,-63 -141,-141 0,-3 15,-984 -1062,-984 -1078,0 -1064,948 -1064,951z"/>
                                        <path fill="rgba(255, 255, 255, 0.3)" d="M3640 2538l0 0c48,0 88,40 88,88l0 88c0,48 -40,88 -88,88l0 0c-48,0 -88,-40 -88,-88l0 -88c0,-48 40,-88 88,-88z"/>
                                    </svg> Other
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </aside>   
                </Transition>
                <Transition
                    appear={true}
                    show={!isStatic && isOpen}
                    enter="transition-opacity"
                    enterFrom="opacity-0"
                    enterTo="opacity-50"
                    leave="transition-opacity duration-300"
                    leaveFrom="opacity-50"
                    leaveTo="opacity-0">
                    <div className="fixed inset-0 bg-black opacity-50 z-20" />
                </Transition>
                <div className="flex flex-col flex-end">   
                <header className="flex h-20 justify-between z-10 bg-gray-100 md:ml-64">

                    {!isStatic && (isOpen ?  (
                        <div className="flex">
                        <button
                            tabIndex="1"
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="w-6 ml-4" 
                            onClick={() => setOpen(false)} >
                            <X />
                        </button>
                        <Link href="/">
                            <a className="flex  items-center">
                            <img src="/logo.svg" alt="logo Idex" className="w-12" />
                            <h1 className="text-4xl hidden md:block">Idex</h1>
                            </a>
                        </Link>
                        </div>
                        
                    ) : (
                        <div className="flex">
                        <button 
                            tabIndex="1"
                            aria-label="Open Menu"
                            title="Open Menu"
                            className="w-6 ml-4" 
                            onClick={() => setOpen(true)} >
                            <Menu />
                        </button>
                        <Link href="/">
                            <a className="flex  items-center">
                            <img src="/logo.svg" alt="logo Idex" className="w-12" />
                            <h1 className="text-4xl hidden md:block">Idex</h1>
                            </a>
                        </Link>
                        </div>
                        
                        
                    ))}
                    
                    <form className="w-full relative flex items-center z-10 right-0" action="/pokemon/">
                        <input className="w-full h-20 bg-gray-100 text-sm px-4 focus:outline-none" type="search" name="search" placeholder="Nome do pokémon ou Número" />
                        <button className="absolute right-0 p-4" type="submit"> <Search /> </button>
                    </form>
                </header>      
        </div>
        </div>
    )
}
