// map - tab

let btn1 = document.getElementById("btn-1");
let btn2 = document.getElementById("btn-2");
let btn3 = document.getElementById("btn-3");
let btn4 = document.getElementById("btn-4");
let iframes = document.querySelector(".iframe-box");

btn2.addEventListener("click", function () {
  this.classList.add("active");
  iframes.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.784760595736!2d69.52622841479428!3d41.31354580853359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5774bb568c81%3A0x5a794f7263a1e89a!2zQXN0cnVtIC0g0JjQoiDQkNC60LDQtNC10LzQuNGP!5e0!3m2!1sru!2s!4v1681162523155!5m2!1sru!2s" width="100%" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn1.addEventListener("click", function () {
  this.classList.add("active");
  iframes.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.0728836780786!2d69.20162391479329!3d41.28551821026812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8ba578f4f58d%3A0xd7a2ecf23413b7a0!2sNajot%20Ta&#39;lim%20Chilonzor%20Filial!5e0!3m2!1sru!2s!4v1681162866560!5m2!1sru!2s" width="100%" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn2.classList.remove("active");
  btn3.classList.remove("active");
  btn4.classList.remove("active");
});

btn3.addEventListener("click", function () {
  this.classList.add("active");
  iframes.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.941837267314!2d71.7856761147614!3d40.38798166531257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bb83a471c6b55b%3A0x9927f2609db0d333!2sNajot%20Ta&#39;lim%20Farg&#39;ona!5e0!3m2!1sru!2s!4v1681162649582!5m2!1sru!2s" width="100%" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn2.classList.remove("active");
  btn4.classList.remove("active");
});

btn4.addEventListener("click", function () {
  this.classList.add("active");
  iframes.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.784760595736!2d69.52622841479428!3d41.31354580853359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae5774bb568c81%3A0x5a794f7263a1e89a!2zQXN0cnVtIC0g0JjQoiDQkNC60LDQtNC10LzQuNGP!5e0!3m2!1sru!2s!4v1681162693051!5m2!1sru!2s" width="100%" height="354" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
  btn1.classList.remove("active");
  btn3.classList.remove("active");
  btn2.classList.remove("active");
});
