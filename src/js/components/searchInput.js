import songList from "../api/songList.js";
import { search, searchBtn } from "../constants/constants.js";

export default function searchInput() {
  search.addEventListener("keyup", function (e) {
    if (e.key == "Enter") {
      songList();
    }
  });

  searchBtn.addEventListener("click", async function () {
    if (search.value) {
      songList();
    }
  });
}
