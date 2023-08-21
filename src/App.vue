<script setup>
import JB from "./components/JB.vue";
import keys from "./components/keys.vue";
import { ref } from "vue";

var socket = io();

const connection = ref("");

socket.on("connection", () => {
  connection.value = "You are connected and listening...";
});
</script>

<template>
  <main>
    <h1>Family Keys</h1>
    <p>{{ connection }}</p>
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