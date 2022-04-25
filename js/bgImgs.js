const bgImg = document.createElement("img");

const bgImages = ["1.jpeg", "5.jpeg"];

function randomBgImg() {
  const randomNumber = Math.floor(Math.random() * bgImages.length);

  bgImg.src = `./img/${bgImages[randomNumber]}`;
  bgImg.classList.add("bg");
  document.body.append(bgImg);
}
randomBgImg();
