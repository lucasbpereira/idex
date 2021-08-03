module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        bug: {
          light: '#A2D147',
          DEFAULT: '#83C300',
          dark: '#689D01'
        },
        dark: {
          light: '#7A6E8D',
          DEFAULT: '#5B5466',
          dark: '#372C4A'
        },
        dragon: {
          light: '#1589EC',
          DEFAULT: '#006FC9',
          dark: '#0062B5'
        },
        electric: {
          light: '#FFE155',
          DEFAULT: '#FBD100',
          dark: '#EEC402'
        },
        fairy: {
          light: '#FFADF4',
          DEFAULT: '#FB89EB',
          dark: '#FC45E4'
        },
        fighting: {
          light: '#FF5528',
          DEFAULT: '#D84219',
          dark: '#C32E06'
        },
        fire: {
          light: '#FFA55C',
          DEFAULT: '#FF9741',
          dark: '#FF7200'
        },
        flying: {
          light: '#B2CFFF',
          DEFAULT: '#89AAE3',
          dark: '#527DC4'
        },
        ghost: {
          light: '#7491D5',
          DEFAULT: '#4C6AB2',
          dark: '#254899'
        },
        grass: {
          light: '#53D965',
          DEFAULT: '#38BF4B',
          dark: '#0F9E23'
        },
        ground: {
          light: '#F37537',
          DEFAULT: '#E87236',
          dark: '#C54B0F'
        },
        ice: {
          light: '#6EE8D8',
          DEFAULT: '#4CD1C0',
          dark: '#17C0AA'
        },
        normal: {
          light: '#B7C1C9',
          DEFAULT: '#919AA2',
          dark: '#6F777E'
        },
        poison: {
          light: '#D07BEC',
          DEFAULT: '#B567CE',
          dark: '#993BB8'
        },
        psychic: {
          light: '#FF7682',
          DEFAULT: '#FF6675',
          dark: '#DC4452'
        },
        rock: {
          light: '#E4DABD',
          DEFAULT: '#C8B686',
          dark: '#A9996C'
        },
        steel: {
          light: '#7DA7B9',
          DEFAULT: '#5A8EA2',
          dark: '#417083'
        },
        water: {
          light: '#56A6EA',
          DEFAULT: '#3692DC',
          dark: '#1973C0'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
