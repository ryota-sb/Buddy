const state = () => ({
  fromUser: null
})

const mutations = {
  setFromUser(state, payload) {
    state.fromUser = payload
  }
}

const actions = {
  async getFromUser() {
    
  }
}

export default {
  state,
  mutations,
  actions
}