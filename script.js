const dots = document.getElementById("dots");

let count = 1;

setInterval(() => {
    dots.textContent = ".".repeat(count);

    count++;

    if (count > 3) {
        count = 1;
    }
}, 500);
