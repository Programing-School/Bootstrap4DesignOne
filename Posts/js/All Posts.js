function random_bg_color() {
  var r = Math.floor(Math.random() * 255);
  var g = Math.floor(Math.random() * 255);
  var b = Math.floor(Math.random() * 255);
  var a = Math.floor(Math.random() * 3);
  var bgColor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
  console.log(bgColor);
  document.body.style.background = bgColor;
  const genrat = document.querySelector("#generator");
  genrat.innerHTML = "The Background-Color is " + bgColor;
}

random_bg_color();
