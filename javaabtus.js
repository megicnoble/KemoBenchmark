let valueDisplays = document.querySelectorAll(".num");
let interval = 1000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));

  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;

    if (endValue == 0) {
      startValue -= 1;
    }
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});

const menuIcon = document.getElementById("menu-icon");
const phonenav = document.querySelector(".phonenav");

menuIcon.addEventListener("click", () => {
  phonenav.style.right = phonenav.style.right === "0px" ? "-20em" : "0px";
});

animation.addEventListener("DOMLoaded", function () {
  animation.setSubframe(false);
  animation.setQuality("high");
  animation.setSize(300, 150);
});
