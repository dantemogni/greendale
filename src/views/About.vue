<template>
    <transition appear name="scale" mode="out-in">
      <AboutUsComponent/>
    </transition>
</template>

<script>
// @ is an alias to /src
import AboutUsComponent from '@/components/AboutUsComponent.vue'

export default {
  name: 'about',
  components: {
    AboutUsComponent,
  },
    mounted() {
    document.title = 'Nosotros | Greendale'
  }
}
</script>