// APlayer
const aplayer = document.querySelector("#aplayer");
if(aplayer) {
  let dataSong = aplayer.getAttribute("data-song");
  dataSong = JSON.parse(dataSong);

  let dataSinger = aplayer.getAttribute("data-singer");
  dataSinger = JSON.parse(dataSinger);

  const ap = new APlayer({
    container: aplayer,
    audio: [
      {
        name: dataSong.title,
        artist: dataSinger.fullName,
        url: dataSong.audio,
        cover: dataSong.avatar,
      },
    ],
    autoplay: true,
    volume: 0.8
  });

  const elementAvatar = document.querySelector(".singer-detail .inner-avatar");

  ap.on('play', function () {
    elementAvatar.style.animationPlayState = "running";
  });

  ap.on('pause', function () {
    elementAvatar.style.animationPlayState = "paused";
  });
}
// End APlayer

// Button Like
const buttonLike = document.querySelector("[button-like]");
if(buttonLike) {
  buttonLike.addEventListener("click", () => {
    const idSong = buttonLike.getAttribute("button-like");
    const isActive = buttonLike.classList.contains("active");

    const typeLike = isActive ? "dislike" : "like";

    const link = `/songs/like/${typeLike}/${idSong}`;

    const options = {
      method: "PATCH"
    };
    
    fetch(link, options)
      .then(res => res.json())
      .then(data => {
        if(data && data.code == 200) {
          const span = buttonLike.querySelector("span");
          span.innerHTML = `${data.like} thích`;
          buttonLike.classList.toggle("active");
        }
      })
  });
}
// End Button Like

// Button Favorite
const listButtonFavorite = document.querySelectorAll("[button-favorite]");
if(listButtonFavorite.length > 0) {
  listButtonFavorite.forEach((buttonFavorite) => {
    buttonFavorite.addEventListener("click", () => {
      const idSong = buttonFavorite.getAttribute("button-favorite");
      const isActive = buttonFavorite.classList.contains("active");
  
      const typeFavorite = isActive ? "unfavorite" : "favorite";
  
      const link = `/songs/favorite/${typeFavorite}/${idSong}`;
  
      const options = {
        method: "PATCH"
      };
      
      fetch(link, options)
        .then(res => res.json())
        .then(data => {
          if(data && data.code == 200) {
            console.log(data);
            buttonFavorite.classList.toggle("active");
          }
        })
    });
  });
}
// End Button Favorite