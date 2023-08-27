const showImg = document.querySelector("#show img");
const indicators = document.querySelector(".indicators");

indicators.addEventListener("click", function (e) {
  e.target.src && (showImg.src = e.target.src);
});

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
h1.innerHTML = "С этим товаров мокупают";

bigHome.append(novinka, novinkaProdacts);
novinka.append(container);
container.append(allLink2);
allLink2.append(h1);
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
h1Before.innerHTML = "Акции";

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

