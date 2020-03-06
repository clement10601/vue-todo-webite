<template>
<div>
  <nav-drawer :drawer="drawer" :drawer-variant="drawer_variant" :items="navitems" />
    <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app fixed dense>
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="hidden-sm-and-down"> Title </span>
    </v-toolbar-title>

    <v-spacer></v-spacer>
    <v-btn icon fab>
      <v-icon>mdi-github-circle</v-icon>
    </v-btn>
    <v-btn icon fab>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>
  </v-app-bar>
</div>
</template>

<script>
export default {
  components: {
    NavDrawer: () => import(`@/components/NavDrawer`),
  },
  data: () => ({
    name: 'NavBar',
    drawer: false,
    drawer_variant: false,
    navitems: [
      { text: 'My Files', icon: 'mdi-folder' },
      { text: 'Shared with me', icon: 'mdi-account-multiple' },
      { text: 'Starred', icon: 'mdi-star' },
      { text: 'Recent', icon: 'mdi-history' },
      { text: 'Offline', icon: 'mdi-check-circle' },
      { text: 'Uploads', icon: 'mdi-upload' },
      { text: 'Backups', icon: 'mdi-cloud-upload' },
    ]
  })
}
</script>