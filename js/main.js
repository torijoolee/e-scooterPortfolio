(() => {
  const imageItems = document.querySelectorAll(".image-item");
  const textElems = document.querySelectorAll(".text");
  let currentItem = textElems[0];

  for (let i = 0; i < textElems.length; i++) {
    imageItems[i].dataset.index = i;
    textElems[i].dataset.index = i;
  }
  function handleScroll() {
    let text;
    let boundingRect;

    for (i = 0; i < textElems.length; i++) {
      text = textElems[i];
      boundingRect = text.getBoundingClientRect().top;

      if (
        boundingRect > window.innerHeight * 0.1 &&
        boundingRect < window.innerHeight * 0.9
      ) {
        currentItem.classList.remove("visible");
        currentItem = imageItems[text.dataset.index];
        currentItem.classList.add("visible");
      }
    }
  }

  window.addEventListener("scroll", handleScroll);
})();
