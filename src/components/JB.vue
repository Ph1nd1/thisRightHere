<script setup>
import * as Tone from "tone";

// const synth = new Tone.Synth().toDestination();
// const synth = new Tone.PolySynth(Tone.Synth).toDestination();
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
  <button class="button-17" @click="playNote1">Play 1</button>
  <button class="button-17" @click="playNote2">Play 2</button>
  <button class="button-17" @click="playNote3">Play 3</button>
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  font-family: "Courier New", Courier, monospace;
}
/* <!-- HTML !--> */
/* <button class="button-17" role="button">Button 17</button> */

/* CSS */
.button-17 {
  margin-bottom: 2rem;
  align-items: center;
  appearance: none;
  background-color: #fff;
  border-radius: 24px;
  border-style: none;
  box-shadow: rgba(0, 0, 0, 0.2) 0 3px 5px -1px,
    rgba(0, 0, 0, 0.14) 0 6px 10px 0, rgba(0, 0, 0, 0.12) 0 1px 18px 0;
  box-sizing: border-box;
  color: #3c4043;
  cursor: pointer;
  display: inline-flex;
  fill: currentcolor;
  font-family: "Google Sans", Roboto, Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 48px;
  justify-content: center;
  letter-spacing: 0.25px;
  line-height: normal;
  max-width: 100%;
  overflow: visible;
  padding: 2px 24px;
  position: relative;
  text-align: center;
  text-transform: none;
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 10rem;
  will-change: transform, opacity;
  z-index: 0;
}

.button-17:hover {
  background: #f6f9fe;
  color: #174ea6;
}

.button-17:active {
  box-shadow: 0 4px 4px 0 rgb(60 64 67 / 30%),
    0 8px 12px 6px rgb(60 64 67 / 15%);
  outline: none;
}

.button-17:focus {
  outline: none;
  border: 2px solid #4285f4;
}

.button-17:not(:disabled) {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):hover {
  box-shadow: rgba(60, 64, 67, 0.3) 0 2px 3px 0,
    rgba(60, 64, 67, 0.15) 0 6px 10px 4px;
}

.button-17:not(:disabled):focus {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}

.button-17:not(:disabled):active {
  box-shadow: rgba(60, 64, 67, 0.3) 0 4px 4px 0,
    rgba(60, 64, 67, 0.15) 0 8px 12px 6px;
}

.button-17:disabled {
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 3px 0,
    rgba(60, 64, 67, 0.15) 0 4px 8px 3px;
}
</style>
