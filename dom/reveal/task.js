const blocks = document.querySelectorAll(".reveal");
window.addEventListener("scroll", function() {
  for (let item of blocks) {
    const banners = {top, bottom} = item.getBoundingClientRect();
    if (window.innerHeight - banners.top >= 0 && banners.bottom >=0) {
      item.classList.add("reveal_active");
    }
    else {
      item.classList.remove("reveal_active")
    }
  }
})