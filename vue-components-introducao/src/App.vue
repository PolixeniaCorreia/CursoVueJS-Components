<template>
  <div>
    <AppHeader/>
    <Contador/>
  </div>
</template>

<script>
import Contador from "./components/contador/Contador.vue";
import AppHeader from "./components/shared/AppHeader.vue";

export default {
  components: {
    Contador,
    AppHeader
  }
};
</script>
