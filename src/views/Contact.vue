<template>
    <router-view/>
    <ContactComponent id="contact"/>
</template>

<script>
// @ is an alias to /src
import ContactComponent from '@/components/ContactComponent.vue'

export default {
  name: 'Campus',
  components: {
    ContactComponent,
  },
  mounted() {
    document.title = 'Contacto | Greendale'
  }
}
</script>
<style scoped>
    #contact{
        background: white;
    }
</style>