window.onload = function () {
  const navScroll = document.querySelector("nav");
  window.addEventListener("scroll", function () {
    navScroll.classList.add("scrolled");
    // console.log("스크롤 y 값 :" , window.scrollY)
    // window.scrollY 는 f12 console 에서 스크롤하면 알아서 스크롤 Y값 알려줌
    if (window.scrollY > 70) {
      navScroll.classList.add("scrolled");
    } else {
      navScroll.classList.remove("scrolled");
    }
  });
};
