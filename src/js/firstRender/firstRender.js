import firstRenderCard from "./firstRenderCard.js";
import clickPlaylist from "./clickPlaylist.js";

export default async function firstRender() {
  firstRenderCard();

  const myPlaylist = document.querySelectorAll("#myPlaylist");

  clickPlaylist(myPlaylist);
}
