let productsRow = document.querySelector(".products__row");
let productsNumber = document.querySelector(".products__number");
let searchInput = document.querySelector(".search__input");

let search = "";

// pagination variables
let pagination = document.querySelector(".pagination");
let limit = 10;
let active = 0;

// getting card
function generateStars(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fa-solid fa-star"></i> ';
    } else {
      stars += '<i class="fa-regular fa-star"></i> ';
    }
  }
  return stars;
}

function getProductCard({ image, name, description: desc, rating }) {
  const stars = generateStars(rating);

  return `
    <div class="popular-card">
      <div class="popular-card-body">
        <img src="${image}" />
        <button>
          <i class="fa-regular fa-heart"></i>
        </button>
      </div>
      <div class="popular-card-footer">
          <div class="popular-card-prices-left">
            <h3>${name}</h3>
          </div>
        <div class="popular-card-footer-bott">
          <p>${desc}</p>
          <p class="star-rating">${stars}</p>
          <button>В корзину</button>
        </div>
      </div>
    </div>
  `;
}

// mapping
function getProducts() {
  let searchProducts = prodacts.filter((el) =>
    el.name.toLowerCase().includes(search)
  );
  let start = active * limit;

  productsRow.innerHTML = "";

  searchProducts.slice(start, start + limit).forEach((el) => {
    productsRow.innerHTML += getProductCard(el);
  });

  productsNumber.textContent = searchProducts.length;

  let pages = Math.ceil(searchProducts.length / limit);
  let pgtnList = "";

  // making pagination elements
  pgtnList = `<li class="page-item disabled">
    <span class="page-link"> < </span>
  </li>`;

  for (let i = 0; i < pages; i++) {
    pgtnList += `<li onclick="getPage(${i})" class="page-item ${
      i == active ? "active" : ""
    }"><span class="page-link">${i + 1}</span></li>`;
  }

  pgtnList += `<li class="page-item">
    <span class="page-link"> > </span>
  </li>`;

  pagination.innerHTML = pgtnList;
}

getProducts();

// searching
searchInput.addEventListener("keyup", function () {
  search = this.value.trim().toLowerCase();
  getProducts();
});

function getPage(page) {
  active = page;
  getProducts();
}
