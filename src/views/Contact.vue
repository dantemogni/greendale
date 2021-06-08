<template>
    <transition appear name="scale" mode="out-in">
      <ContactComponent id="contact"/>
    </transition>
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