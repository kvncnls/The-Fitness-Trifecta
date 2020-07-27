// This project was purposely done without Classes and Objects.
// This project shows knowledge of if/else statements, the DOM,
// Event Listeners, changes to CSS classes/elements,
// and hopefully a bit of humor. :)

const bodyComp = document.querySelector("#bodyComp");
const optPerf = document.querySelector("#optPerf");
const socialLife = document.querySelector("#socialLife");

bodyComp.addEventListener("click", () => {
  if (bodyComp.checked) {
    optPerf.checked = true;
    socialLife.checked = false;
  } else if (bodyComp.checked == false && optPerf.checked == true) {
    optPerf.checked = false;
  }
});

optPerf.addEventListener("click", () => {
  if (socialLife.checked == false && bodyComp.checked == false) {
    bodyComp.checked = true;
  } else if (optPerf.checked == false) {
    bodyComp.checked = false;
  }
});

socialLife.addEventListener("click", () => {
  if (socialLife.checked) {
    bodyComp.checked = false;
  } else if (optPerf.checked == false && bodyComp.checked == false) {
  } else {
    if ((optPerf.checked = true)) {
      bodyComp.checked = true;
    }
  }
});
