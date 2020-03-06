<template>
  <v-app :style="{background: $vuetify.theme.themes[isDark].background}">
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    //
  }),
  computed:{
        isDark(){ return (this.$vuetify.theme.dark) ? 'dark' : 'light' }
  }
};
</script>
