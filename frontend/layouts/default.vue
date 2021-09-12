<template>
  <v-app dark>
    <Header />
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: { Header, Footer }
}
</script>
