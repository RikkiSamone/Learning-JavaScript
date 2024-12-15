// added missing commas in the array
const darkColorsArr = [
  "#2C3E50",
  "#34495E",
  "#2C2C2C",
  "#616A6B",
  "#4A235A",
  "#2F4F4F",
  "#0E4B5A",
  "#36454F",
  "#2C3E50",
  "#800020",
];


//capitalized the M in Math.random
//wrapped Math.floor to get a whole number
function getRandomIndex() {
  const randomIndex = Math.floor(darkColorsArr.length * Math.random());
  return randomIndex;
}

//capitalized the S in query.Selector to fix TypeError
//added the # so that the id is selected

const body = document.querySelector("body");
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code");


//added the parenthesis to the function inside the brackets
function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()];
    bgHexCodeSpanElement.innerText = color;
    body.style.backgroundColor = color;
}
const btn = document.querySelector("#btn"); //adjusted the id selector based on the HTML

//parenthesis are not needed to initialize the on.click function of the button. 
btn.onclick = changeBackgroundColor;