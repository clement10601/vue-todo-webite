import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import LRU from"lru-cache"

Vue.use(Vuetify)

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60, // 1 hour
})

export default new Vuetify({
  rtl: false,
  theme: {
    dark: false,
      options: {
        customProperties: true,
        minifyTheme: function (css) {
          return process.env.NODE_ENV === 'production'
            ? css.replace(/[\r\n|\r|\n]/g, '')
            : css
        },
        themeCache
      },
    themes: {
      light: {
        primary: '#21CFF3',
        accent: '#FF4081',
        secondary: '#ffe18d',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      },
      dark: {
        primary: '#1976D2',
        accent: '#e91e63',
        secondary: '#30b1dc',
        success: '#4CAF50',
        info: '#2196F3',
        warning: '#FB8C00',
        error: '#FF5252'
      }
    },
  },
});
