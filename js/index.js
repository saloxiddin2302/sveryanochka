// products card code

const home = document.querySelector("#home");

const prodactsRow = document.createElement("div");

prodactsRow.className = "prodacts-row";

const prodactsContent = document.createElement("div");
prodactsContent.className = "prodacts-content";

const prodactsTitle = document.createElement("h1");

prodactsTitle.className = "prodacts-title";

const title = document.createTextNode("Акции");

const allLink = document.createElement("a");
allLink.href = "#";
allLink.innerHTML = "Все продукты >";

prodactsTitle.appendChild(title);

prodactsContent.append(prodactsTitle, allLink);

home.firstElementChild.append(prodactsContent, prodactsRow);

const popularRow = document.querySelector(".popular-row");

function getCard(img, name, category, price, category2, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const popularCardPricesRight = document.createElement("div");
  popularCardPricesRight.className = "popular-card-prices-right";

  const title = document.createElement("h3");
  title.textContent = name;

  const cate = document.createElement("p");
  cate.textContent = category;

  const cate2 = document.createElement("p");
  cate2.innerHTML = category2;

  const title2 = document.createElement("h5");
  title2.textContent = price;

  const likeBtn = document.createElement("button");
  likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.append(popularCardPricesLeft, popularCardPricesRight);

  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.append(title, cate);
  popularCardPricesRight.append(title2, cate2);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCardBody.appendChild(likeBtn);

  return popularCard;
}

prodacts
  .filter((el) => el.discount != 0)
  .slice(0, 4)
  .forEach((el) => {
    let card = getCard(
      el.image,
      el.name,
      el.category,
      el.price,
      el.category2,
      el.description,
      el.rating
    );
    popularRow.appendChild(card);
  });

// novinka card box

const bigHome = document.querySelector(".big-home");

const novinka = document.createElement("section");
novinka.id = "novinka";
novinka.style.paddingTop = "50px";

const container = document.createElement("div");
container.className = "container";

const container2 = document.createElement("div");
container2.className = "container";

const novinkaProdacts = document.createElement("section");
novinkaProdacts.id = "novinka-prodacts";

const novinkaRow = document.createElement("div");
novinkaRow.className = "novinka-row";

const allLink2 = document.createElement("div");
allLink2.className = "novinka-link";

const h1 = document.createElement("h1");
h1.innerHTML = "Новинки";

const Nlink = document.createElement("a");
Nlink.href = "#";
Nlink.innerHTML = "Все продукты >";

bigHome.append(novinka, novinkaProdacts);
novinka.append(container);
container.append(allLink2);
allLink2.append(h1, Nlink);
novinkaProdacts.append(container2);
container2.append(novinkaRow);

const novinkaRowFuct = document.querySelector(".novinka-row");

function getCardNovinka(img, name, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const title = document.createElement("h3");
  title.textContent = name;

  const likeBtn = document.createElement("button");
  likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.appendChild(popularCardPricesLeft);
  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.appendChild(title);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCardBody.appendChild(likeBtn);

  return popularCard;
}

prodacts.slice(-4).forEach((el) => {
  let card2 = getCardNovinka(el.image, el.name, el.description, el.rating);
  novinkaRow.appendChild(card2);
});

// before - buy - box

const bigHome2 = document.querySelector(".big-home");

const beforeBuy = document.createElement("section");
beforeBuy.id = "before-buy";
beforeBuy.style.paddingTop = "50px";

const container3 = document.createElement("div");
container3.className = "container";

const container4 = document.createElement("div");
container4.className = "container";

const beforeBuyProdact = document.createElement("section");
beforeBuyProdact.id = "before-buy-prodacts";

const beforeBuyRow = document.createElement("div");
beforeBuyRow.className = "before-buy-row";

const allLink3 = document.createElement("div");
allLink3.className = "before-buy-link";

const h1Before = document.createElement("h1");
h1Before.innerHTML = "Покупали раньше";

const beforeLink = document.createElement("a");
beforeLink.href = "#";
beforeLink.innerHTML = "Все продукты >";

bigHome2.append(beforeBuy, beforeBuyProdact);
beforeBuy.appendChild(container3);
container3.append(allLink3);
allLink3.append(h1Before, beforeLink);
beforeBuyProdact.append(container4);
container4.append(beforeBuyRow);

function getCardBefore(img, name, description, rating) {
  const popularCard = document.createElement("div");
  popularCard.className = "popular-card";
  const popularCardBody = document.createElement("div");

  const image = document.createElement("img");
  image.src = img;
  popularCardBody.appendChild(image);

  popularCardBody.className = "popular-card-body";

  const popularCardFooter = document.createElement("div");
  popularCardFooter.className = "popular-card-footer";

  const popularCardPrices = document.createElement("div");
  popularCardPrices.className = "popular-card-prices";

  const popularCardPricesLeft = document.createElement("div");
  popularCardPricesLeft.className = "popular-card-prices-left";

  const title = document.createElement("h3");
  title.textContent = name;

  const likeBtn = document.createElement("button");
  likeBtn.innerHTML = `<i class="fa-regular fa-heart"></i>`;

  const popularCardFooterBott = document.createElement("div");
  popularCardFooterBott.className = "popular-card-footer-bott";

  const popularCarddeck = document.createElement("p");
  popularCarddeck.textContent = description;

  const starRating = document.createElement("p");
  starRating.className = "star-rating5";

  let stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  starRating.innerHTML = stars || "Bunaqa reyting yo'q!!!";

  const cardBtn = document.createElement("button");
  cardBtn.innerHTML = "В корзину";

  popularCardPrices.appendChild(popularCardPricesLeft);
  popularCardFooter.append(popularCardPrices, popularCardFooterBott);
  popularCardPricesLeft.appendChild(title);
  popularCardFooterBott.append(popularCarddeck, starRating, cardBtn);
  popularCard.append(popularCardBody, popularCardFooter);
  popularCardBody.appendChild(likeBtn);

  return popularCard;
}

prodacts
  .filter((el) => el.rating > 5)
  .forEach((el) => {
    let card3 = getCardBefore(el.image, el.name, el.description, el.rating);
    beforeBuyRow.appendChild(card3);
  });

// special offers

const bigHome3 = document.querySelector(".big-home");

const container5 = document.createElement("div");
container5.className = "container";

const massive_ofisserBox = document.createElement("section");
massive_ofisserBox.id = "ofiserr-box";

const ofiserr_Box_title = document.createElement("div");
ofiserr_Box_title.className = "ofiserr-box-title";

const h1_ofiserr_title = document.createElement("h1");
h1_ofiserr_title.innerHTML = "Специальные предложения";

const ofiserr_Box_card = document.createElement("div");
ofiserr_Box_card.className = "ofiserr-box-card";

const offersBoxLeft = document.createElement("div");
offersBoxLeft.className = "ofiserr-box-left";

const offersBoxRight = document.createElement("div");
offersBoxRight.className = "ofiserr-box-right";

bigHome3.append(massive_ofisserBox);
massive_ofisserBox.append(container5);
container5.append(ofiserr_Box_title, ofiserr_Box_card);
ofiserr_Box_card.append(offersBoxLeft, offersBoxRight);
ofiserr_Box_title.append(h1_ofiserr_title);

massive_ofisser.forEach((ofiserr, index) => {
  const card = document.createElement("div");
  card.className = "card";

  const cardTitle = document.createElement("h2");
  cardTitle.innerHTML = ofiserr.name;

  const cardText = document.createElement("p");
  cardText.innerHTML = ofiserr.about;

  const cardImg = document.createElement("img");
  cardImg.alt = ofiserr.name;
  cardImg.src = ofiserr.img;

  const card_title777 = document.createElement("div");
  card_title777.className = "card-title";

  const cardBody = document.createElement("div");
  cardBody.className = "card-body";

  card.append(card_title777, cardBody);
  card_title777.append(cardTitle, cardText);
  cardBody.append(cardImg);

  if (index % 2 === 0) {
    offersBoxLeft.append(card);
  } else {
    offersBoxRight.append(card);
  }
});

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
