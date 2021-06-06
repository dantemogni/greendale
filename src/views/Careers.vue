<template>
  <div class="careers grid">
    <router-view/>
    <CareersComponent/>
    <Sidebar/>
  </div>
</template>

<script>
// @ is an alias to /src
import CareersComponent from '@/components/CareersComponent.vue'
import Sidebar from '@/components/Sidebar.vue'

export default {
  name: 'Careers',
  components: {
    CareersComponent,
    Sidebar,
  },
  mounted() {
    document.title = 'Carreras | Greendale'
  }
}
</script>
