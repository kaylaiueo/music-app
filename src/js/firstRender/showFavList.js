import {
  favBtn,
  listSong,
  sectionHead,
  songResult,
  bottomPlayer,
} from "../constants/constants.js";
import getFavSong from "../api/getFavSong.js";

export default function showFav() {
  favBtn.onclick = () => {
    if (!listSong.classList.contains("hidden")) {
      sectionHead.innerText = "Favorite";
    } else if (listSong.children[0].id == "specific-song") {
      sectionHead.innerText = "Music";
    } else {
      sectionHead.innerText = "Music to start ur day";
    }

    // if (!listSong.classList.contains("hidden")) {
    bottomPlayer.classList.toggle("hidden");
    songResult.classList.toggle("hidden");
    listSong.classList.toggle("hidden");
    // }
  };
}
