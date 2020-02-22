<template>
  <v-data-table
    :headers="headerCols"
    :items="jsonData"
    :items-per-page="5"
    dense
    class="elevation-1"
  />
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['jsonData', 'headerCols']),
    headers () {
      let headers = []
      if (this.jsonData && this.jsonData[0]) {
        headers = Object.keys(this.jsonData[0]).map(header => ({
          text: header + '',
          align: 'left',
          sortable: true,
          value: header + ''
        }))
      }
      return headers
    }
  }
}
</script>
