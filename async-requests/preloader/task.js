const imgLoad = document.getElementById("loader");
const items = document.getElementById("items");
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://netology-slow-rest.herokuapp.com");
xhr.send();

xhr.addEventListener("readystatechange", function() {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {    imgLoad.classList.remove("loader_active");
    const currencyDataList = JSON.parse(xhr.responseText).response.Valute;
 for (let item in currencyDataList) {
   let newElem = document.createElement("div");
   newElem.classList.add("item");
   newElem.innerHTML = `<div class="item__code"> ${currencyDataList[item].CharCode}
                </div>
                <div class="item__value">
                    ${currencyDataList[item].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;
   items.append(newElem);
 }
  }
})
