let hit = 0;
let miss = 0;

for (let i = 0; i < 10; i++) {
    let targetHole = document.getElementById("hole" + 1);
    targetHole.onclick = () => {
        if (targetHole.className.includes("hole hole_has-mole")) {
            hit += 1;
            document.getElementById("dead").textContent = hit;
            if (hit === 10) {
                alert("Вы выиграли!");
                return location.reload();
            }
        }

        else {
            miss += 1;
            document.getElementById("lost").textContent = miss;
            if (miss === 5) {
                alert("Поражение!");
                return location.reload;
            }

        }
    }
}