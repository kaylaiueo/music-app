export default async function getFavSong() {
  const listFavSong = document.getElementById("listFavSong");
  const favStorage = JSON.parse(localStorage.getItem("fav"));

  if (favStorage !== null) {
    for (let i = 0; i < favStorage.length; i++) {
      const endpoint = `https://pipedapi.kavin.rocks/streams/${favStorage[i]}`;
      const response = await fetch(endpoint);
      const { uploader, title, thumbnailUrl } = await response.json();

      const artist = uploader.includes("- Topic")
        ? uploader.slice(0, -7)
        : uploader;

      const cards = `
    <li id="favSong"
    class="w-40 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white rounded-lg cursor-pointer p-4 hover:bg-gray-200 drop-shadow-2xl">
    <div class="rounded-md overflow-hidden w-32">
    <img src="${thumbnailUrl}" loading="lazy" alt="song album" class="w-full aspect-square object-cover" />
    </div>
    <div class="pt-2">
    <h3 class="font-bold text-sm truncate">${title}</h3>
    <p class="font-semibold text-sm text-gray-500 line-clamp-2">${artist}</p>
    </div>
    </li>
      `;

      listFavSong.innerHTML += cards;
    }
  }
}
