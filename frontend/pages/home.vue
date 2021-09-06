<template>
  <v-row>
    <v-col cols="6">
      <v-card>
        <v-card-title>画像</v-card-title>
      </v-card>
    </v-col>
    <v-col cols="6">
      <v-card>
        <v-card-title>プロフィール</v-card-title>
        <v-card-title>{{ current_user }}</v-card-title>
        <v-btn>×</v-btn>
        <v-btn>◯</v-btn>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: 'authenticated',
  computed: {
    ...mapState({
      current_user: state => state.user.user.data
    })
  },
  methods: {
    like() {
      
      // ログインユーザーのID取得（current_userのID)
      // 相手のユーザーのID取得
      // is_likeの値をtrueにする
    },
    notLike() {

    }
  }
}
</script>
