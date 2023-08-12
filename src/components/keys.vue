<script setup>
import * as Tone from "tone";

var socket = io();

const keys = [
  { colour: "white b", key: "F3", control: "D" },
  { colour: "black as", key: "F#3", control: "" },
  { colour: "white a", key: "G3", control: "F" },
  { colour: "black gs", key: "G#3", control: "" },
  { colour: "white g", key: "A3", control: "G" },
  { colour: "black fs", key: "A#3", control: "" },
  { colour: "white f", key: "B3", control: "ArrowDown" },
  { colour: "white e", key: "C4", control: "W" },
  { colour: "black ds", key: "C#4", control: "" },
  { colour: "white d", key: "D4", control: "A" },
  { colour: "black cs", key: "D#4", control: "" },
  { colour: "white c", key: "E4", control: "S" },
];
// const synth = new Tone.Synth().toDestination();
// const synth = new Tone.PolySynth(Tone.Synth).toDestination();
const sampler = new Tone.Sampler({
  urls: {
    C4: "C4.mp3",
  },
  release: 1,
  baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

const playNote = (note) => {
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
  <ul class="set">
    <li
      v-for="(key, index) in keys"
      :key="index"
      :class="key.colour"
      @click="playNote(key.key)"
    ></li>
  </ul>
</template>

<style scoped>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  background: #222;
}

ul {
  height: 18.875em;
  width: 34em;
  margin: 5em auto;
  padding: 3em 0 0 3em;
  position: relative;
  border: 1px solid #160801;
  border-radius: 1em;
  background: linear-gradient(
      to bottom right,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0)
    ),
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/187/vwood.png);
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5) inset,
    0 1px rgba(212, 152, 125, 0.2) inset, 0 5px 15px rgba(0, 0, 0, 0.5);
}

li {
  margin: 0;
  padding: 0;
  list-style: none;
  position: relative;
  float: left;
}

ul .white {
  height: 16em;
  width: 4em;
  z-index: 1;
  border-left: 1px solid #bbb;
  border-bottom: 1px solid #bbb;
  border-radius: 0 0 5px 5px;
  box-shadow: -1px 0 0 rgba(255, 255, 255, 0.8) inset, 0 0 5px #ccc inset,
    0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #eee 0%, #fff 100%);
}

ul .white:active {
  border-top: 1px solid #777;
  border-left: 1px solid #999;
  border-bottom: 1px solid #999;
  box-shadow: 2px 0 3px rgba(0, 0, 0, 0.1) inset,
    -5px 5px 20px rgba(0, 0, 0, 0.2) inset, 0 0 3px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to bottom, #fff 0%, #e9e9e9 100%);
}

.black {
  height: 8em;
  width: 2em;
  margin: 0 0 0 -1em;
  z-index: 2;
  border: 1px solid #000;
  border-radius: 0 0 3px 3px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -5px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 2px 4px rgba(0, 0, 0, 0.5);
  background: linear-gradient(45deg, #222 0%, #555 100%);
}

.black:active {
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.2) inset,
    0 -2px 2px 3px rgba(0, 0, 0, 0.6) inset, 0 1px 2px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to right, #444 0%, #222 100%);
}

.a,
.g,
.f,
.d,
.c {
  margin: 0 0 0 -1em;
}

ul li:first-child {
  border-radius: 5px 0 5px 5px;
}

ul li:last-child {
  border-radius: 0 5px 5px 5px;
}
</style>
