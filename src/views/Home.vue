<template>
    <transition appear name="scale" mode="out-in">
      <MainHome/>
    </transition>
</template>

<script>
// @ is an alias to /src
import MainHome from '@/components/MainHome.vue'

export default {
  name: 'Home',
  components: {
    MainHome,
  },
    mounted() {
    document.title = 'Greendale'
  }
}
</script>
