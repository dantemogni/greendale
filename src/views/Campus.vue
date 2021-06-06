<template>
  <div class="grid">
    <router-view/>
    <CampusComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import CampusComponent from '@/components/CampusComponent.vue'

export default {
  name: 'Campus',
  components: {
    CampusComponent,
  },
    mounted() {
    document.title = 'Campus | Greendale'
  }
}
</script>
<style scoped>
    .grid{
        background: white;
    }
</style>