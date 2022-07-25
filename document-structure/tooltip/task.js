const tooltips = Array.from(document.querySelectorAll(".has-tooltip"));

tooltips.forEach(tooltip => {
   const item = document.createElement("div");
   item.textContent = tooltip.title;

   tooltip.addEventListener("click", (e) => {
      e.preventDefault();
      item.classList.add("tooltip");
      tooltip.insertAdjacentElement('beforeBegin', item);
      item.style.position = "absolute";
      const items = Array.from(document.querySelectorAll(".tooltip_active"));
      const findItem = items.find(item => item.classList.contains("tooltip_active"));

      if (findItem === undefined) {
         item.classList.add("tooltip_active");
      } else {
         if (findItem !== item) {
            item.classList.add("tooltip_active");
         }
         findItem.classList.remove("tooltip_active");
      }
   })
})