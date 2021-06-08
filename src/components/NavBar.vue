<template>
    <div class="grid-entero sticky">
            <nav>
                <div class="nav-container">
                    <router-link v-for="item in items" v-bind:to="item.link" v-bind:alt="item.title" v-bind:key="item" v-bind:item="item" class="item-nav">{{item.title}}</router-link>
                </div>
            </nav> 
        </div>
</template>

<script>
export default {
  name: 'NavBar',
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
                  title: 'Nosotros',
                  link: '/nosotros',
              },
                {
                  title: 'Contacto',
                  link: '/contacto',
              },
          ]
      }
  },
}
</script>