import { listSong } from "../constants/constants.js";

export default function cards(songs) {
  listSong.innerHTML = songs.items
    .map((list) => {
      return `
        <li
          title="${list.title} - ${list.uploaderName}"
          id="specific-song"
          class="w-40 bg-gray-100 dark:bg-white/10 dark:hover:bg-white/20 dark:text-white rounded-lg cursor-pointer p-4 hover:bg-gray-200 drop-shadow-2xl">
          <div class="rounded-md overflow-hidden w-32">
            <img
              src="${list.thumbnail}"
              loading="lazy"
              alt="song album"
              class="w-32 h-32 aspect-square object-cover" />
          </div>
          <div class="pt-2">
            <h3 class="font-bold text-sm truncate">${list.title}</h3>
            <p class="font-semibold text-sm text-gray-500 line-clamp-2">
              ${list.uploaderName}
            </p>
          </div>
        </li>
      `;
    })
    .join("");
}
