<template>
  <v-row>
    <v-col>
      <div id="show-auth" />
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.loginForm()
  },
  methods: {
    loginForm() {
      this.$auth0.showLock('show-auth')
    }
  }
}
</script>
