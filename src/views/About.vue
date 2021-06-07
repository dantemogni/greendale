<template>
    <router-view/>
    <AboutUsComponent/>
    <Sidebar/>
</template>

<script>
// @ is an alias to /src
import AboutUsComponent from '@/components/AboutUsComponent.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'about',
  components: {
    AboutUsComponent,
    Sidebar,
  },
    mounted() {
    document.title = 'Nosotros | Greendale'
  }
}
</script>