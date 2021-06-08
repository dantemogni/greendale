<template>
    <transition appear name="scale" mode="out-in">
      <CareersComponent/>
    </transition>
</template>

<script>
// @ is an alias to /src
import CareersComponent from '@/components/CareersComponent.vue'

export default {
  name: 'Careers',
  components: {
    CareersComponent,
  },
  mounted() {
    document.title = 'Carreras | Greendale'
  }
}
</script>
