<template>
  <div class="grid">
    <HeroContent/>
    <NavBar/>

    <router-view/>
    <transition appear name="slide" mode="out-in">
      <Sidebar v-if="['Contact', 'Campus'].indexOf($route.name) == -1"/>
    </transition>
    <FooterContent/>
   </div>
</template>

<script>
import HeroContent from '@/components/HeroContent.vue'
import FooterContent from '@/components/FooterContent.vue'
import NavBar from '@/components/NavBar.vue'
import Sidebar from '@/components/Sidebar.vue'


export default ({
    components: {
      HeroContent,
      NavBar,
      Sidebar,
      FooterContent,
    },
})
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.3s ease;
}


.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.97);
}

.slide-enter-active {
  transition: all 0.5s ease;
}
.slide-leave-active{
   display: none;

}

.slide-enter-to, .slide-leave-from  {
  position: relative;
  right: 0;
}


.slide-enter-from, .slide-leave-to {
  position: relative;
  right: -35%;
}

</style>