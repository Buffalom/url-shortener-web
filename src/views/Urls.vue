<template>
  <div>
    <h1>Shorts</h1>
    <table class="shorts">
      <thead>
        <tr>
          <th>Short</th>
          <th>Url</th>
          <th>Created at</th>
          <th>Calls</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="short of shortsInOrder" :key="short._id">
          <td>{{ short.hash }}</td>
          <td>{{ short.url }}</td>
          <td>{{ dateFormatted(short.createdAt) }}</td>
          <td>{{ totalCalls(short) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import globalErrorHandler from '../utils/globalErrorHandler'

export default {
  name: 'urls',
  mounted () {
    this.$store.dispatch('fetchShorts').catch(globalErrorHandler(this))

    console.log(this.dateFormatted('2019-06-03T12:10:00.000Z'))
    console.log(this.dateFormatted('2019-06-04T12:10:00.000Z'))
    console.log(this.dateFormatted('2019-06-04T13:10:00.000Z'))
  },
  computed: {
    ...mapGetters(['shortsInOrder'])
  },
  methods: {
    dateFormatted (utcTimestamp) {
      let date = new Date(utcTimestamp)
      let now = new Date()
      if (
        date.getFullYear() === now.getFullYear()
        && date.getMonth() === now.getMonth()
        && date.getDate() === now.getDate()
      ) {
        if (date.getHours() === now.getHours()) {
          let diff = now - date
          return `${Math.floor(diff / 1000 / 60)} minutes ago`
        } else {
          return `${date.getHours()}:${date.getMinutes()}`
        }
      }
      return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`
    },
    totalCalls (short) {
      let callsBrowser = short.stats.browser.reduce((prev, curr) => prev + curr.calls, 0)
      let callsOs = short.stats.os.reduce((prev, curr) => prev + curr.calls, 0)
      let callsDevices = short.stats.devices.reduce((prev, curr) => prev + curr.calls, 0)
      return callsBrowser + callsOs + callsDevices
    }
  }
}
</script>
