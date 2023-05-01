import { playMusic } from "../components/control.js";
import { mainSong, repeatBtn, next, prev } from "../constants/constants.js";
import loadPlaylist from "./loadPlaylist.js";

export default function clickPlaylist(myPlaylist) {
  myPlaylist.forEach((list, index) => {
    list.addEventListener("click", async function () {
      let musicIndex = index;

      loadPlaylist(musicIndex);

      next.addEventListener("click", function () {
        musicIndex++;
        if (musicIndex == myPlaylist.length) {
          musicIndex = 0;
        }
        loadPlaylist(musicIndex);
      });

      prev.addEventListener("click", function () {
        if (musicIndex == 0) {
          musicIndex = myPlaylist.length;
        }
        musicIndex--;
        loadPlaylist(musicIndex);
      });

      mainSong.addEventListener("ended", function () {
        let getText = repeatBtn.innerText;

        switch (getText) {
          case "repeat":
            musicIndex++;
            if (musicIndex == myPlaylist.length) {
              musicIndex = 0;
            }
            loadPlaylist(musicIndex);
            break;
          case "repeat_one":
            mainSong.currentTime = 0;
            playMusic();
            break;
        }
      });
    });
  });
}
