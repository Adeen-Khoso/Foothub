/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,js}'],
  theme: {
    colors:{
      white:'#FFFFFF',
      primary_dark:'#203147',
      primary_light:'#3B5271',
      secondary_color:'91B0DA',
      primary_bg:'#DDE6ED',
      hover_text_color:'color: rgb(148 163 184);'
    },
    extend: {
      backgroundImage:{
        'colorfull-bg' : "url('/Assets/background.jpg')"
      }
    },
  },
  plugins: [],
}
