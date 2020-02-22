<template>
  <v-app id="inspire">
    <NavDrawer />
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
      <MainFooter />
    </v-footer>
  </v-app>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import NavDrawer from '@/components/NavDrawer'
import MainFooter from '@/components/Footer'
export default {
  components: {
    NavDrawer,
    MainFooter
  },

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
