<template>
  <v-navigation-drawer 
    app 
    :mini-variant="navDrawer"
  >
    <div class="wrapper pa-4">
      <div class="json-input">
        <v-form v-model="jsonValid">
          <v-textarea
            outlined
            label="Paste JSON"
            v-model="jsonInput"
            :rules="jsonRules"
          />
          <v-btn 
            @click="processJSON" 
            :disabled="!jsonValid"
          >
            Process Data
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-navigation-drawer>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data: () => ({
    jsonInput: null,
    jsonRules: [
      function(input) {
        try {
          JSON.parse(input)
          return true
        } catch {
          return 'Incorrect JSON syntax'
        }
      },
      (input) => {
        let _json = null
        try {
          _json = JSON.parse(input)
        } catch {
          _json = []
        }
        return Array.isArray(_json) ? true : 'Not an Array'
      }
    ],
    jsonValid: false
  }),

  computed: {
    ...mapState(['navDrawer'])
  },

  methods: {
    ...mapMutations({
      updateJson: 'UPDATE_JSON'
    }),
    processJSON () {
      /* eslint-disable */
      let _json = []
      try {
        _json = JSON.parse(this.jsonInput)
        this.jsonError = false
      } catch {
        this.jsonError = true
      }
      this.updateJson(_json)
    }
  }
}
</script>
