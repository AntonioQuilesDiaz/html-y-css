module.exports = {
  purge: [],
  theme: {
    extend: {
      colors:{
        /*"azul-claro":"#37bcf9",*/
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
        

        /*rotateGear : {
          'from' : {transform: 'rotateZ(0deg)'},
          'to' : {transform: 'rotateZ(360deg)'},
        },
        fromBellow : {
          '0%': {transform: 'translateY(0%)'}, 
          '50%':{transform: 'translateY(200%)'},
          '100%':{transform: 'translateY(0%)'},
        },*/
      },
      animation: {
        /*'rotategear' : 'rotateGear 2s infinite linear',
          'frombellow' : 'fromBellow 500ms linear',*/
          pisadas1 : 'pisadas1 6s infinite linear',
          pisadas2 : 'pisadas2 6s infinite linear',
          pisadas3 : 'pisadas3 6s infinite linear',
      },
      /*boxShadow: {
        'lateral-h3': '0px 1px 0px #393d3f, 1px 2px 0px #393d3f, 2px 3px 0px #393d3f, 3px 4px 0px #393d3f'
      }*/
      },
      height:{
        'formulario': '400px',
        'input': '50px'
      },
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
