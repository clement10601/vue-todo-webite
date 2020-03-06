<template>
  <v-navigation-drawer
      v-model="drawerPopUp"
      :mini-variant="DrawerVariant"
      :clipped="$vuetify.breakpoint.lgAndUp"
      absolute
       app>
      <v-list
          dense
          nav
          class="py-0"
        >
         <template v-for="item in items">
          <v-row
            v-if="item.heading"
            :key="item.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="item.children"
            :key="item.text"
            v-model="item.model"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ item.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in item.children"
              :key="i"
              link
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="item.text"
            link
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
       <template v-slot:append>
          <div class="pa-2" v-if='!DrawerVariant'>
            <v-btn block>Logout</v-btn>
          </div>
      </template>
    </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavDrawer',
  props: {
    drawer: {
      type: Boolean,
      default: function () { return [] }
    },
    DrawerVariant: {
      type: Boolean,
      default: function () { return [] }
    },
    items: {
      default: function () { return [] }
    }
  },
  data: () => ({
    item: 0,
    drawerPopUp: false
  }),
  watch: {
    drawer(val) {
      this.drawerPopUp = val
    }
  },
}
</script>