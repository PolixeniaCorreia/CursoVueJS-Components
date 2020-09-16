import Vue from 'vue'

Vue.component('pcs-component',{
   data: function(){
      return {
         titulo: 'Curso VUEJS'
      }
   },
   template:'<h1> {{ titulo }} </h1>'
})

new Vue({
   el: '#app'
})