import Vue from 'vue'

/*Vue.component('pcs-component', {
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
*/

const pcsComponent = {
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
}

new Vue({
   el: '#app1',
   components: {
      'pcs-component': pcsComponent 
   }
}),
new Vue({
   el: '#app2'
})