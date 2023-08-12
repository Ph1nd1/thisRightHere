<script setup>
import JB from "./components/JB.vue";
import keys from "./components/keys.vue";
</script>

<template>
  <main>
    <h1>let's play</h1>
    <JB />
    <keys />
  </main>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
}
</style>
