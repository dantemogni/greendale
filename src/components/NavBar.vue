<template>
    <div class="grid-entero sticky">
            <nav>
                <div class="nav-container">
                    <router-link v-for="item in items" v-bind:to="item.link" v-bind:alt="item.title" v-bind:key="item" v-bind:item="item" class="item-nav" v-bind:class="{active:page===item.title}">{{item.title}}</router-link>
                </div>
            </nav> 
        </div>
</template>

<script>
export default {
  name: 'NavBar',
  props:{
      page:{
        type: String,
        default: 'Inicio',
        },
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
                  title: 'Acerca De',
                  link: '/acerca',
              },
                {
                  title: 'Contacto',
                  link: '/contact',
              },
          ]
      }
  },
}
</script>