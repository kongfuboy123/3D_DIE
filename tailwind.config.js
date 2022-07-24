/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        oneFly:'oneFly ease-in-out 2.4s',
        twoFly:'twoFly ease-in-out 2.4s',
        threeFly:'threeFly ease-in-out 2.4s',
        fourFly:'fourFly ease-in-out 2.4s',
        fiveFly:'fiveFly ease-in-out 2.4s',
        sixFly:'sixFly ease-in-out 2.4s',
        boxRotate:'boxRotate  10s 2.4s linear infinite',// duration:10s delay:2.4s
        picRotate:'picRotate  10s linear infinite',
        ringRotate:'ringRotate  1s linear infinite',
      },
      keyframes:{
        oneFly:{
          '0%':{
            transform:'rotateY(90deg) translateZ(300px)',
            opacity:0
          },
          '12.5%':{
            transform:'rotateY(0deg) translateZ(300px) ',
            opacity:1
          },
          '75%':{
            transform:'rotateY(0deg) translateZ(300px)'
          },
          '87.5%':{
            transform:'rotateY(0deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateY(0deg) translateZ(100px)'}
        },
        twoFly:{
          '0%':{
            transform:'rotateY(180deg) translateZ(300px) ',
            opacity:0
          },
         
          '25%':{
            transform:'rotateY(90deg) translateZ(300px) ',
            opacity:1
          },
          '75%':{
            transform:'rotateY(90deg) translateZ(300px)'
          },
          '87.5%':{
            transform:'rotateY(90deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateY(90deg) translateZ(100px) '}
        },
        threeFly:{
          '0%':{
            transform:'rotateX(-90deg) translateZ(300px) ',
            opacity:0
          },
         
          '37.5%':{
            transform:'rotateX(90deg) translateZ(300px)',
            opacity:1
          },
          '75%':{
            transform:'rotateX(90deg) translateZ(300px)'
          },
          '87.5%':{
            transform:'rotateX(90deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateX(90deg) translateZ(100px)'}
        },
        fourFly:{
          '0%':{
            transform:'rotateX(90deg) translateZ(300px) ',
            opacity:0
          },
         
          '50%':{
            transform:'rotateX(270deg) translateZ(300px)',
            opacity:1
          },
          '75%':{
            transform:'rotateX(270deg) translateZ(300px)'
          },
          '87.5%':{
            transform:'rotateX(270deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateX(270deg) translateZ(100px)'}
        },

        fiveFly:{
          '0%':{
            transform:'rotateY(0deg) translateZ(300px) ',
            opacity:0
          },
         
          '62.5%':{
            transform:'rotateY(-90deg) translateZ(300px)',
            opacity:1
          },

          '75%':{
            transform:'rotateY(-90deg) translateZ(300px)'
          },
          '87.5%':{
            transform:'rotateY(-90deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateY(-90deg) translateZ(100px)'}
        },
        sixFly:{
          '0%':{
            transform:'rotateY(-90deg) translateZ(300px)',
            opacity:0
          },
          '75%':{
            transform:'rotateY(-180deg) translateZ(300px)',
            opacity:1
          },
          '87.5%':{
            transform:'rotateY(-180deg) translateZ(300px)'
          } ,           
          '100%':{transform:'rotateY(-180deg) translateZ(100px)'}
        },
        boxRotate:{
          '0%':{
            transform:'rotateX(-20deg) rotateY(-20deg) rotateZ(0deg)'
          },
          '100%':{
            transform:'rotateX(340deg) rotateY(340deg) rotateZ(360deg)'
          }
        },

        picRotate:{
          '0%' :{
            transform: 'rotateY(0)'
          },
          '100%':{
            transform: 'rotateY(-360deg)'
          }
        },
        ringRotate:{
          '0%' :{
            transform: 'rotateZ(0)'
          },
          '100%':{
            transform: 'rotateZ(360deg)'
          }
        }
      }
    },
  },
  plugins: [],
}
