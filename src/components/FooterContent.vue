<template>
        <section class="grid-entero mapa">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.100391187299!2d-88.00138948489122!3d42.934010406654636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880511ee2b18c787%3A0xe3a564395590b238!2sGreendale%20High%20School!5e0!3m2!1ses-419!2sar!4v1620408983322!5m2!1ses-419!2sar" width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </section>
        <footer class="grid-entero">
            <div class="footer-container">
                    <div class="item-footer item-footer-1">
                        <p>{{msg}}{{year}}<br><i>Diseñado por: <a v-bind:href="authorLink" v-bind:alt="this.alt">{{author}}</a></i></p>
                    </div>
                    <div class="item-footer item-footer-2 social-links">
                        <a v-bind:href="social.link" v-bind:alt="social.title" v-for="social in socialMedia" v-bind:key="social" v-bind:social="social"><i v-bind:class="social.classFA"></i></a>
                    </div>
            </div>
        </footer>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FooterContent',
  setup(){
      const year = computed(() => new Date().getFullYear())
      return { year }
  },
  data: function(){
      return {
        msg: "Greendale Community College. © ",
        author: "Dante Mogni",
        authorLink: "https://github.com/dantemogni/",
        alt: "GitHub",
        socialMedia:[
            {
                title:'Facebook',
                classFA:  'fab fa-facebook',
                link: "#Facebook"
            },
            {
                title: 'Twitter',
                classFA: 'fab fa-twitter',
                link: "#Twitter"
            },
            {
                title: 'Instagram',
                classFA: 'fab fa-instagram',
                link: "#Instagram"
            }, 
            {
                title:'Mail',
                classFA: 'far fa-envelope',
                link: "#Mail"
            }],
      }
  } 
}
</script>