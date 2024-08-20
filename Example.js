let body =
document.querySelector("body");
let isToggled = false;
 
body.onclick = () => {
    isToggled = !isToggled;
    body.style.setProperty("--value",
      isToggled ? "black" : "white")
}