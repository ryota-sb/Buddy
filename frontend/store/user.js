const state = () => ({
  user: null,
  other_user: null,
  isAuth: false
})

const mutations = {
  login(state, payload) {
    state.user = payload
    state.isAuth = true
  },
  logout(state) {
    state.user = null
    state.isAuth = false
  },
  setOtherUser(state, payload) {
    state.other_user = payload
  }
}

const actions = {
  // ユーザー情報の保存と認証
  async logIn({ commit }, { headers, userId }) {
    const uri = `http://localhost:3000/api/v1/users/${userId}`
    await this.$axios.get(uri, { headers: headers }).then(res => {
      commit('login', res.data)
    }).catch(err => {
      console.log(err)
    })
  },
  // ユーザー情報と認証を削除
  async logOut({ commit }) {
    commit('logout')
  },
  // ログインユーザー以外のユーザーを取得して保存
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