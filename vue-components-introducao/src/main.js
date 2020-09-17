import Vue from 'vue'

// const data = {
//    titulo: 'Curso VUEJS', 
//    contador: 0
// }

Vue.component('pcs-component', {
   data: function () {
      return {
         titulo: 'Curso VUEJS',
         contador: 0
      }
   },
   methods: {
      incrementar: function () {
         this.contador++
      }
   },

   template: `
   <div>
   <h1> {{ titulo }} </h1>
   <button @click="incrementar"> Clicado {{ contador }} vezes. </button>
   </div> `
})

new Vue({
   el: '#app'
})