module.exports = {
  mode: 'jit',
  purge: [],
  theme: {
    extend: {
      colors:{
        bordeimage: '#ffeac7'
      },
      keyframes:{
        pisadas1:{
          '0%': {opacity: '0'}, 
          '5%':{opacity: '100'},
          '70%':{opacity: '100'},
          '90%':{opacity: '0'},
          '100%':{opacity: '0'},
        },
        pisadas2:{
          '0%': {opacity: '0'}, 
          '30%': {opacity: '0'}, 
          '35%':{opacity: '100'},
          '80%':{opacity: '100'},
          '95%':{opacity: '0'},
          '100%':{opacity: '0'},
        },
        pisadas3:{
          '0%': {opacity: '0'}, 
          '60%': {opacity: '0'}, 
          '65%':{opacity: '100'},
          '90%':{opacity: '100'},
          '100%':{opacity: '0'},
        },
      },
      animation: {
          pisadas1 : 'pisadas1 6s infinite linear',
          pisadas2 : 'pisadas2 6s infinite linear',
          pisadas3 : 'pisadas3 6s infinite linear',
      },
      },
      height:{
        'formulario': '400px',
        'input': '50px'
      },
      boxShadow: {
        'sombra': '15px 15px 11px -9px rgba(0,0,0,0.48)',
        'sombrahome': '10px 0px 20px -0px rgba(0,0,0,0.48)',
        'sombracont1': 'inset -10px -1px 30px black',
        'sombracont2': 'inset -10px -1px 30px #ffeac7',
      }
    },
  variants: {
    extend: {
      animation:['responsive', 'hover', 'group-hover'],
      fontSize:['responsive', 'hover', 'group-hover'],
      transform:['responsive', 'hover', 'group-hover'],
      scale:['responsive', 'hover', 'group-hover'],
      borderColor: ['responsive', 'hover', 'group-hover','focus'],
    },
  },
  plugins: [],
}
