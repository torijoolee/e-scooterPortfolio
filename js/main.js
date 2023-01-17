(() => {
  const imageItems = document.querySelectorAll(".image-item");
  const textElems = document.querySelectorAll(".text");
  const currnetItem = textElems[0];

  for (let i = 0; i < textElems.length; i++) {
    textElems[i].dataset.index = i;
    imageItems[i].dataset.index = i;
  }

  function handleScroll() {
    for (i = 0; i < textElems.length; i++) {
      let text = textElems[i].dataset.index;
      let textImage = imageItems[i].dataset.index;

      if (text == textImage) {
        imageItems[i].classList.add("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
})();
