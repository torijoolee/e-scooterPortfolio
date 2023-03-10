(() => {
  const imageItems = document.querySelectorAll(".image-item");
  const textElems = document.querySelectorAll(".text");
  let currentItem = imageItems[0];
  const scrollTopElem = document.querySelector(".scrollTop");

  function handlescrollTop() {
    const header = document.querySelector("#section0");
    const headerHight = header.offsetHeight;
    console.log(headerHight);
    if (window.scrollY > headerHight / 2) {
      scrollTopElem.classList.add("visible");
    } else {
      scrollTopElem.classList.remove("visible");
    }
  }

  window.addEventListener("scroll", handlescrollTop);

  for (let i = 0; i < textElems.length; i++) {
    textElems[i].dataset.index = i;
    imageItems[i].dataset.index = i;
  }

  function activate() {
    currentItem.classList.add("visible");
  }

  function inactivate() {
    currentItem.classList.remove("visible");
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
        inactivate();
        currentItem = imageItems[text.dataset.index];
        activate();
      }
    }
  }
  activate();

  window.addEventListener("scroll", handleScroll);
})();
