let qrBtn = document.querySelector("button");
let img = document.querySelector(".Qr-img");
let url = document.querySelector("input");

qrBtn.addEventListener("click", () => {
  if (!url.value) {
    alert("Url required!");
  } else {
    let urlValue = url.value;
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${urlValue}`;
    img.alt = `${urlValue}`;
    img.style.display = "initial";

    url.value = "";
  }
});
