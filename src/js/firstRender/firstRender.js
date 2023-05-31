import playlistCard from "./playlistCard.js";
import clickPlaylist from "./clickPlaylist.js";
import clickFullPlayer from "./handleFullPlayer.js";

export default async function firstRender() {
  playlistCard();

  const myPlaylist = document.querySelectorAll("#myPlaylist");

  clickPlaylist(myPlaylist);

  if (window.innerWidth < 500) {
    clickFullPlayer();
  }
}
