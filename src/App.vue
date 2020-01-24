<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      app 
      :mini-variant="navDrawer"
    >
      Nav
    </v-navigation-drawer>

    <v-app-bar app>
      <v-btn icon>
        <v-icon @click="toggleDrawer">
          mdi-arrow-expand-right
        </v-icon>
      </v-btn>
      <router-link to="/settings">
        Settings
      </router-link>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      Footer
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  computed: {
    ...mapState(['navDrawer'])
  },

  methods: {
    ...mapMutations({
      toggleDrawer: 'TOGGLE_DRAWER'
    })
  }
}
</script>
