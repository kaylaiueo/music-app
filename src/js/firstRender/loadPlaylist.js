import { playMusic } from "../components/control.js";
import marquee from "../components/marquee.js";
import {
  musicArtist,
  albumCover,
  mainSong,
  listSong,
  listFavSong,
  tabHeader,
} from "../constants/constants.js";

export default async function loadPlaylist(musicIndex, playlist) {
  if (
    listSong.children[0].id == "myPlaylist" &&
    listFavSong.classList.contains("hidden")
  ) {
    const endpoint = `https://pipedapi.kavin.rocks/streams/${playlist[musicIndex].song}`;
    const response = await fetch(endpoint);
    const { uploader, title, thumbnailUrl, audioStreams } =
      await response.json();

    const artist = uploader.includes("- Topic")
      ? uploader.slice(0, -7)
      : uploader;
    const song = audioStreams[0].url;

    musicArtist.innerText = artist;
    marquee(title);
    albumCover.src = thumbnailUrl;
    mainSong.src = song;
    playMusic();

    tabHeader.innerText = `${title} - ${artist}`;
  }
}
