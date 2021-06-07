<template>
    <!--<NavBar page="Inicio"/>-->
    <router-view/>
    <MainArticles/>
    <Sidebar/>
</template>

<script>
// @ is an alias to /src
import MainArticles from '@/components/MainHome.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Home',
  components: {
    MainArticles,
    Sidebar,
  },
    mounted() {
    document.title = 'Greendale'
  }
}
</script>
