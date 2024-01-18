const colorBars = document.getElementById("color-bars");
const colorNames = document.getElementById("color-names");

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  let seedColor = document.getElementById("seed-color").value;
  let hex = seedColor.substring(1);
  let colorMode = document.querySelector("select").value;
  let fetchApi = `https://www.thecolorapi.com/scheme?hex=${hex}&mode=${colorMode}&count=5`;

  fetch(fetchApi)
    .then((res) => res.json())
    .then((data) => {
      const colorData = data.colors;

      const colorBarHtml = colorData
        .map((item) => {
          return `
        <div class='color-display' style="background-color:${item.hex.value}"></div>
        `;
        })
        .join("");

      const colorNameHtml = colorData
        .map((item) => {
          return `
        <div class='color-code'>${item.hex.value}</div>
        `;
        })
        .join("");

      colorBars.innerHTML = colorBarHtml;
      colorNames.innerHTML = colorNameHtml;
    });
});
