<template>
  <div class="about">
    <h1>Admin page</h1>
  </div>
</template>
<script>
export default {
  name: 'about',

  created() {
    if (!this.$store.state.user) {
      this.$router.push({ name: 'home' });
      return;
    }

    const { login, id } = this.$store.state.user;

    if (!login || !id) {
      this.$router.push({ name: 'home' });
    }
  },
};
</script>
