<template>
  <div>
    <app-header/>
    <app-contador/>
  </div>
</template>

<script>
import AppContador from "./AppContador.vue";
import AppHeader from "./AppHeader.vue";

export default {
  components: {
    AppContador,
    AppHeader
  }
};
</script>
