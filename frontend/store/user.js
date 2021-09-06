const state = () => ({
  user: null,
  other_user: null
})

const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setOtherUser(state, payload) {
    state.other_user = payload
  }
}

const actions = {
  async getUser({ commit }, { headers, userId }) {
    const uri = `http://localhost:3000/api/v1/users/${userId}`
    await this.$axios.get(uri, { headers: headers }).then(res => {
      commit('setUser', res.data)
    }).catch(err => {
      console.log(err)
    })
  },
  async getOtherUser({ commit }, { headers }) {
    const uri = "http://localhost:3000/api/v1/users"
    await this.$axios.get(uri, { headers: headers }).then(res => {
      commit('setOtherUser', res.data)
    }).catch(err => {
      console.log(err)
    })
  }
}

export default {
  state,
  mutations,
  actions
}