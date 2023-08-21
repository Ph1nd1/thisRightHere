<script setup>
import * as Tone from "tone";
import { reactive, computed } from 'vue'

var socket = io();

const keyPlayed = reactive([])

// https://archive.org/download/NeverGonnaGiveYouUpOriginal/Never%20Gonna%20Give%20You%20Up%20Original.mp3

const sampler = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

const playNote = (note) => {
  keyPlayed.push(`Played ${note}`)
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(note, 0.2);
  });
};

window.addEventListener(
  "keydown",
  (event) => {
    switch (event.key) {
      case "l":
      case "ArrowDown":
      case "w":
      case "a":
      case "s":
      case "d":
      case "f":
      case "g":
        socket.emit("note played", event.key);
        break;
      case "ArrowLeft":
      case "ArrowRight":
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);

socket.on("note played", (note) => {
  console.log("playing", note);
  switch (note) {
    case "l":
      playNote("C3");
      break;
    case "ArrowDown":
      playNote("B3");
      break;
    case "w":
      playNote("C4");
      break;
    case "a":
      playNote("D4");
      break;
    case "s":
      playNote("E4");
      break;
    case "d":
      playNote("F4");
      break;
    case "f":
      playNote("G4");
      break;
    case "g":
      playNote("A4");
      break;
    case "ArrowLeft":
    case "ArrowRight":
    default:
      return; // Quit when this doesn't handle the key event.
  }
});
</script>
<template>
  <div>
    <p v-for="key in keyPlayed" :key="key">{{ key }}</p>
  </div>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #222;
}
</style>
