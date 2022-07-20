<script setup lang="ts">
import TopBar from "@/components/the-top-bar.vue";
</script>

<template>
  <header>
    <TopBar />
  </header>

  <main>
    <p>todo</p>
  </main>

  <footer>
    <h2>Footer</h2>
  </footer>
</template>

<style scoped>
header {
  top: 0;
  width: 100%;
  height: 10rem;
}

main {
  display: flex;
}

footer {
  position: absolute;
  bottom: 0;
}
</style>
