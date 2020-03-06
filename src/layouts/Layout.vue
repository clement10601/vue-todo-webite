<template>
<v-app id="inspire">
  <navbar />
  <v-content>
    <component
      :is="component"
      v-if="component !== false"/>
    <not-found v-else />
  </v-content>
</v-app>
</template>

<script>

export default {
  components: {
    NotFound: () => import(`@/views/404`),
    Navbar: () => import(`@/components/Navbar`),
  },
  props: {
  },
  data: () => ({
    drawer: true,
    component: undefined,
    page: undefined,
    homePage: 'Home',
  }),
  created () {
    // // console.log(this.$route.params)
    this.showSearchBar = false
    this.setPage()
  },
  beforeRouteUpdate(to, from, next) {
    this.name = to.params.name
    next()
  },
  mounted() {

  },
  watch: {
    '$route' () {
      this.showSearchBar = false
      this.setPage()
    },
  },
  methods:{
    setPage(){
      this.page = this.$route.params.page
      // console.log(this.$route)
      if (!this.page) {
        this.component = false
      }
      import(`@/views/${this.page}`
      ).then(
        (res) => {
          this.component = res.default
        }
      ).catch(() => {
        this.component = false
        // console.log(e)
        throw new Error(`Unable to find layout for <${this.page}>`)
      })
    },
    setSearchBar (value) {
        this.showSearchBar = value
      }
  }
}
</script>
