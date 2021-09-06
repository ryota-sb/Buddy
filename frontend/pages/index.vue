<template>
  <v-row>
    <v-col>
      <v-card>
        <div v-if="loggedIn">
          <v-card-text>ログイン中</v-card-text>
          <v-card-title>{{ other_user }}</v-card-title>
          <v-card-text>{{ this.$auth0.getAccessToken() }}</v-card-text>
          <v-btn to="/logout" nuxt>ログアウト</v-btn>
        </div>
        <div v-else>
          <v-card-text>ログインしていません</v-card-text>
          <v-btn to="/login" nuxt>ログインする</v-btn>
        </div>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  mounted() {
    this.getOtherUser()
  },
  computed: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    },
    ...mapState({
      other_user: state => state.user.other_user
    })
  },
  methods: {
    getOtherUser() {
      const headers = { Authorization: `Bearer ${this.$auth0.getAccessToken()}` }
      this.$store.dispatch('user/getOtherUser', { headers: headers })
    }
  }
}
</script>
