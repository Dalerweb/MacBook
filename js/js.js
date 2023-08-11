let img = document.querySelector(".left-box");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let p = document.querySelector("#p");
let btnpnone = document.querySelector("#btn-pnone");
let btnp1 = document.querySelector("#btn-p1");
let btnp2 = document.querySelector("#btn-p2");
let btnp3 = document.querySelector("#btn-p3");

//кнопка 1
btn1.addEventListener("click", () => {
  img.style.width = 312 + "px";
  img.style.height = 290 + "px";
  img.style.backgroundImage =
    "url('image/mbp14-spacegray-select-202110 1.jpg')";
  img.style.backgroundSize = "cover";
  btn1.style.backgroundColor = "#0071e3";
  btn1.style.color = "white";

  btn2.style.backgroundColor = "#cfe7ff";
  btn2.style.color = "#797979";
  p.innerHTML = "$1,999";
  btn2.onmouseover = function () {
    btn2.style.backgroundColor = "#0071e3";
    btn2.style.color = "white";
  };
  btn2.onmouseleave = function () {
    btn2.style.backgroundColor = "#cfe7ff";
    btn2.style.color = "#797979";
  };
  btn1.onmouseover = function () {
    btn1.style.backgroundColor = "#cfe7ff";
    btn1.style.color = "#797979";
  };
  btn1.onmouseleave = function () {
    btn1.style.backgroundColor = "#0071e3";
    btn1.style.color = "white";
  };
  btnpnone.addEventListener("click", () => {
    p.innerHTML = "$1,999";
    btnpnone.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp1.addEventListener("click", () => {
    p.innerHTML = "$2,199";
    btnp1.style.border = "2px solid #007fff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp2.addEventListener("click", () => {
    p.innerHTML = "$2,599";
    btnp2.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp3.addEventListener("click", () => {
    p.innerHTML = "$3,199";
    btnp3.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
  });
});

if (p.innerHTML == "$1,999") {
  btnpnone.addEventListener("click", () => {
    p.innerHTML = "$1,999";
    btnpnone.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp1.addEventListener("click", () => {
    p.innerHTML = "$2,199";
    btnp1.style.border = "2px solid #007fff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp2.addEventListener("click", () => {
    p.innerHTML = "$2,599";
    btnp2.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp3.addEventListener("click", () => {
    p.innerHTML = "$3,199";
    btnp3.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
  });
}

//кнопка 2
btn2.addEventListener("click", () => {
  img.style.width = 312 + "px";
  img.style.height = 290 + "px";
  img.style.backgroundImage = "url('image/mbp14-silver-select-202110 1.jpg')";
  img.style.backgroundSize = "cover";
  btn2.style.backgroundColor = "#0071e3";
  btn2.style.color = "white";

  btn1.style.backgroundColor = "#cfe7ff";
  btn1.style.color = "#797979";
  p.innerHTML = "$2,599";
  btn1.onmouseover = function () {
    btn1.style.backgroundColor = "#0071e3";
    btn1.style.color = "white";
  };
  btn1.onmouseleave = function () {
    btn1.style.backgroundColor = "#cfe7ff";
    btn1.style.color = "#797979";
  };
  btn2.onmouseover = function () {
    btn2.style.backgroundColor = "#cfe7ff";
    btn2.style.color = "#797979";
  };
  btn2.onmouseleave = function () {
    btn2.style.backgroundColor = "#0071e3";
    btn2.style.color = "white";
  };
  btnpnone.addEventListener("click", () => {
    p.innerHTML = "$2,599";
    btnpnone.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp1.addEventListener("click", () => {
    p.innerHTML = "$2,799";
    btnp1.style.border = "2px solid #007fff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp2.addEventListener("click", () => {
    p.innerHTML = "$3,199";
    btnp2.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp3.style.border = "2px solid #cfe7ff";
  });
  btnp3.addEventListener("click", () => {
    p.innerHTML = "$3,799";
    btnp3.style.border = "2px solid #007fff";
    btnp1.style.border = "2px solid #cfe7ff";
    btnpnone.style.border = "2px solid #cfe7ff";
    btnp2.style.border = "2px solid #cfe7ff";
  });
});
