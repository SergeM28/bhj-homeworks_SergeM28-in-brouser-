let checkbox = document.querySelectorAll("input.interest__check");
for (let i = 0; i < checkbox.length; i++) {
   checkbox[i].addEventListener("change", () => {
        if (checkbox[i].closest("ul.interests_active") === null) {
            let checkboxActive = checkbox[i].closest("li.interest").querySelector("ul.interests_active").children;
            if (checkbox[i].checked) {
                for (let j = 0; j < checkboxActive.length; j++) {
                    checkboxActive[j].firstElementChild.firstElementChild.checked = true;
                };
            } else {
                for (let j = 0; j < checkboxActive.length; j++) {
                    checkboxActive[j].firstElementChild.firstElementChild.checked = false;
                };
            };
        };
    });
};