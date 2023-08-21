<script setup>
import * as Tone from "tone";

const sampler = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

const playNote1 = () => {
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4", "G4", "Bb4"], 0.2);
  });
};

const playNote2 = () => {
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4", "G4", "C5"], 0.2);
  });
};

const playNote3 = () => {
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4", "G4", "C4", "C5"], 0.2);
  });
};
const playNote4 = () => {
  Tone.loaded().then(() => {
    sampler.triggerAttackRelease(["Eb4", "C4", "Ab4"], 0.2);
  });
};
window.addEventListener(
  "keydown",
  (event) => {
    if (event.defaultPrevented) {
      return; // Do nothing if the event was already processed
    }

    switch (event.key) {
      case "ArrowDown":
        // playNote4();
        break;
      case "ArrowUp":
        playNote3();
        break;
      case "ArrowLeft":
        playNote1();
        break;
      case "ArrowRight":
        playNote2();
        break;
      case "Enter":
        break;
      case "Escape":
        break;
      default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
  },
  true
);
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
}
</style>