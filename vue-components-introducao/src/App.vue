<template>
  <div>
    <AppHeader/>
    <ContadorInfo/>
    <Contador/>
  </div>
</template>

<script>
import Contador from "./components/contador/Contador.vue";
import AppHeader from "./components/shared/AppHeader.vue";
import ContadorInfo from "./components/contador/ContadorInfo.vue";


export default {
  
  components: {
    Contador,
    AppHeader,
    ContadorInfo
    
  }
};
</script>
