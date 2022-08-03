const popup = document.getElementById('subscribe-modal');

let popupArr = Array.from(document.querySelectorAll("div.modal__close_times"))
closePopup();
function closePopup() {
    popupArr.forEach(function(modal) {
        modal.onclick = function () {
            modal.closest("div.modal").classList.remove("modal_active");
            document.cookie = 'modal=close; expires = Mon, 31 Sat 2033 00:00:00 GMT';
      };
   });
 };

 function getCookie(name){
    const pairs = '; ' + document.cookie;
    let cookie = pairs.split('; ' + name + '=');
    if (cookie.length === 2)
    return cookie.pop().split(';').shift();
}

if (getCookie('modal') !== 'close')
  popup.classList.add('modal_active');