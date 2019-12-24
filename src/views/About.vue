<template>
  <div class="about">
    <h1 class="text-center">Welcome to admin page, {{$route.query.login}}</h1>
  </div>
</template>
<script>
export default {
  name: 'about',

  created() {
    if (!this.$store.state.user
    || !this.$store.state.user.login
    || !this.$store.state.user.id) {
      this.$router.push({ name: 'home' });
    }

    console.log(this.$route.query);
  },
};
</script>
