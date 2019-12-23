<template>
  <div class="home">
    <RegForm/>
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
