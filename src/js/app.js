import greeting from "./components/greeting.js";
import songDuration from "./components/songDuration.js";
import searchInput from "./components/searchInput.js";
import { playPause } from "./components/control.js";
import firstRender from "./firstRender/firstRender.js";

export default function app() {
  firstRender();
  playPause();
  greeting();
  songDuration();
  searchInput();
}
