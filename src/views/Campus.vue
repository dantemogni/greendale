<template>
    <router-view/>
    <CampusComponent id="campus"/>
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
    #campus{
        background: white;
    }
</style>