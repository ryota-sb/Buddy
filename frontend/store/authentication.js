const state = () => ({
  isAuth: false
})

const mutations = {
  login(state) {
    state.isAuth = true
  },
  logout(state) {
    state.isAuth = false
  }
}

const actions = {
  logIn({ commit }) {
    commit('login')
  },
  logOut({ commit }) {
    commit('logout')
  }
}

export default {
  state,
  mutations,
  actions
}