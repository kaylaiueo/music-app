import {
  albumCover,
  bottomPlayer,
  playPauseBtn,
} from "../constants/constants.js";

export default function getColor() {
  const isFirefox = navigator.userAgent.indexOf("Firefox") != -1;

  if (isFirefox != true) {
    albumCover.onload = () => {
      albumCover.crossOrigin = "Anonymous";
      const canvas = document.getElementById("myCanvas");

      const ctx = canvas.getContext("2d", { willReadFrequently: true });
      ctx.drawImage(albumCover, -90, -50);
      const imageData = ctx.getImageData(
        0,
        0,
        albumCover.width,
        albumCover.height
      );

      const getRgb = imageData.data.slice(0, 3);
      const rgb = [];
      getRgb.forEach((resu) => {
        if (resu > 0) {
          rgb.push(resu);
        }
      });

      bottomPlayer.style.backgroundColor = `rgb(${rgb})`;

      if (rgb[1] <= 127) {
        bottomPlayer.classList.add("text-white");
        playPauseBtn.classList.add("border-white");
      } else if (rgb[1] > 127) {
        bottomPlayer.classList.remove("dark:text-white");
        bottomPlayer.classList.remove("text-white");
        playPauseBtn.classList.remove("border-white");
        playPauseBtn.classList.remove("dark:border-white");
      }
    };
  }
}
