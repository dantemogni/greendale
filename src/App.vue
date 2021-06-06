<template>
  <HeroContent/>
  <div class="grid-entero sticky">
    <nav>
      <div class="nav-container">
        <router-link v-for="item in items" v-bind:to="item.link" v-bind:alt="item.title" v-bind:key="item" v-bind:item="item" class="item-nav">{{item.title}}</router-link>
      </div>
    </nav>
  </div>
  <router-view/>
  <FooterContent/>
</template>

<script>
import HeroContent from '@/components/HeroContent.vue'
import FooterContent from '@/components/FooterContent.vue'

export default ({
    components: {
      HeroContent,
      FooterContent,
    },
    data: function(){
      return{
          items:[
              {
                  title: 'Inicio',
                  link: '/',
              },
                {
                  title: 'Carreras',
                  link: '/carreras',
              },
                {
                  title: 'Acceso Campus',
                  link: '/campus',
              },
                {
                  title: 'Nostros',
                  link: '/nosotros',
              },
                {
                  title: 'Contacto',
                  link: '/contacto',
              },
          ]
      }
  },
})
</script>

