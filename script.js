const img = document.getElementById("funnyPhoto");
const sound = document.getElementById("soundEffect");

img.onclick = () => {
  img.classList.add("rotate");
  sound.play();

  setTimeout(() => {
    img.classList.remove("rotate");
  }, 1000);
};
