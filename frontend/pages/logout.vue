<template>
  <v-row>
    <v-col>
      <p>logout ...</p>
    </v-col>
  </v-row>
</template>

<script>
export default {
  mounted() {
    this.$auth0.unSetToken()
    this.$store.dispatch('authentication/logOut')
    this.$router.replace('/')
  }
}
</script>
