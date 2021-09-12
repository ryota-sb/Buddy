<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="`first-${i}`"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <template v-if="loggedIn">
          <v-list-item 
            v-for="(authItem, i) in authItems"
            :key="`second-${i}`"
            :to="authItem.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ authItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="authItem.title" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-btn v-if="loggedIn" v-text="current_user" />
    </v-app-bar>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/'
        },
        {
          icon: 'mdi-information-outline',
          title: 'About',
          to: '/about'
        }
      ],
      authItems: [
        {
          icon: 'mdi-logout',
          title: 'LogOut',
          to: '/logout'
        }
      ],
      title: 'Buddy'
    }
  },
  computed: {
    loggedIn() {
      return this.$auth0.isAuthenticated()
    },
    ...mapState({
      current_user: state => state.user.user
    })
  }
}
</script>
