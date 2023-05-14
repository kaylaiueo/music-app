import { favorite } from "../constants/constants.js";

export default function handleFavorite(favoriteUrls, currentUrl) {
  favorite.onclick = () => {
    let getText = favorite.innerText;
    const favStorage = JSON.parse(localStorage.getItem("fav"));

    switch (getText) {
      case "favorite_border":
        favorite.innerText = "favorite";
        favoriteUrls.push(currentUrl);
        localStorage.setItem("fav", JSON.stringify(favoriteUrls));
        getFavSong(currentUrl);
        break;
      case "favorite":
        favorite.innerText = "favorite_border";
        favoriteUrls.forEach((fav, index) => {
          if (fav === currentUrl) {
            favoriteUrls.splice(index, 1);
            favorite.innerText = "favorite_border";
            localStorage.setItem("fav", JSON.stringify(favoriteUrls));
            console.log(favoriteUrls);
          }
        });
        break;
    }
  };

  const favStorage = JSON.parse(localStorage.getItem("fav"));

  if (favStorage !== null) {
    favStorage.forEach((fav) => {
      if (currentUrl === fav) {
        favorite.innerText = "favorite";
      }
    });
  }
}
