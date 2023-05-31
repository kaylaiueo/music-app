import getEncodedUrl from "./getEncodedUrl.js";
import getNextPage from "./getNextPage.js";
import clickCard from "../components/clickCard.js";
import nextPageCard from "../components/nextPageCard.js";
import { bottomPlayer } from "../constants/constants.js";

export default function loadNextPage(nextPageUrl, mergedNextPage) {
  window.onscroll = async function () {
    const pageHeight = Math.max(document.documentElement.scrollHeight);

    if (
      window.innerHeight + window.scrollY > pageHeight - 1 &&
      !bottomPlayer.classList.contains("h-full")
    ) {
      const nextPage = await getNextPage(nextPageUrl);
      nextPageUrl = getEncodedUrl(nextPage.nextpage);
      nextPageCard(nextPage);

      nextPage.items.forEach((result) => {
        mergedNextPage.push(result);
      });

      const specificSong = document.querySelectorAll("#specific-song");

      clickCard(specificSong, mergedNextPage);
    }
  };
}
