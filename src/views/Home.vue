<template>
  <div class="home">
    <RegForm msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import RegForm from '@/components/RegForm.vue';

export default {
  name: 'home',
  components: {
    RegForm,
  },
};
</script>
