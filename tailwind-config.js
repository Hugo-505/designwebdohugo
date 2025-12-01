tailwind.config = {
  theme: {
    extend: {
      fontFamily : {
        'sans' : ['Montserrat', 'system-ui', 'sans-serif'],

      },
      colors : {
        // text-ifrn-green
        // text-ifrn-red
        'ifrn' : {
          'green' : {
            50 : "#f3faf5",
            100 : "#e3f5ea",
            200 : "#c9e9d5",
            300 : "#9ed7b5", 
            400 : "#6cbc8c",
            500 : "#47a06c",
            600 : "#368355",
            700 : "#2f6b48",
            800 : "#28533a",
            900 : "#224531",
          },
          'red' : {
            50 : "#fef2f3",
            100 : "#fde3e5",
            200 : "#fcccd0",
            300 : "#f9a8ae", 
            400 : "#f3767f",
            500 : "#e63946",
            600 : "#d52d3a",
            700 : "#b3222d",
            800 : "#942029",
            900 : "#7b2128",
          }
        }
      },

    }
  }
}
