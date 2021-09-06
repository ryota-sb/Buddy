<template>
  <v-row>
    <v-col>
      <v-form>
        <v-file-input
          accept="image/*"
          label="プロフィール画像の選択"
          v-model="image"
          @change="setImage"
        />
        <v-img 
          v-if="imageUrl"
          :src="imageUrl"
          max-width="150"
          max-height="150"
        />
        <v-text-field
          v-model="discord_id"
          label="自分のディスコードID"
        />
        <v-text-field
          v-model="message"
          label="自己紹介メッセージ入力欄"
        />
      </v-form>
      <v-btn @click="createProfile">Profile作成</v-btn>
    </v-col>
  </v-row>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      discord_id: null,
      message: null,
      image: null,
      imageUrl: null
    }
  },
  methods: {
    async createProfile() {
      const uri = 'http://localhost:3000/api/v1/profiles'
      const formData = new FormData()
      formData.append('image', this.image)
      formData.append('message', this.message)
      formData.append('discord_id', this.discord_id)
      const headers = { "content-type":"multipart/form-data", Authorization: `Bearer ${this.$auth0.getAccessToken()}` }
      await this.$axios.post(uri, formData, { headers: headers }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    },
    setImage(e) {
      this.image = e
      if (this.image) {
        this.imageUrl = URL.createObjectURL(this.image)
      } else {
        this.imageUrl = null
      }
    }
  }
}
</script>
