import CONFIG from '../../globals/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const DetailRestoTemplate = (resto) => `
  <article id="img-detail">
    <h2 class="resto-name">${resto.name}</h2>
    <img class="resto-img" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="This is a best restaurants and you can go here" />
    <div class="custReview">
      <h4>Customer Review</h4>
      ${resto.customerReviews.map((review) => `
      <div class="cust-review">
      <p class="reviewer-name">Nama : ${review.name}</p>
      <p class="review">Review : ${review.review}</p>
      <p>Tanggal : ${review.date}</p>
      `).join('<br></div>')}
      </div>
    </div>
  </article>
  <article class="detail">
    <h4>Kota Resto</h4>
    <p>${resto.city}</p>
    <h4>Alamat</h4>
    <p>${resto.address}</p>
    <h4>Menu Makanan</h4>
    <p>${resto.menus.foods.map((food) => food.name).join('<br>')}</p>
    <h4>Menu Minuman</h4>
    <p>${resto.menus.drinks.reduce((show, value) => show.concat(`<li>${value.name}</li>`), '')}</p>
    <h4>Deskripsi</h3>
    <p class="desc">${resto.description}</p>
  </article>
`;

const ListRestoItemTemplate = (resto) => `
<article class="row-item">
<img class="row-item__thumbnail lazyload"
     data-src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}"
     alt="Gambaran Restaurant">
<div class="row-item__content">
  <p class= "row-item__city">${resto.city}</p>
  <h1 class="row-item__title"><a href="/#/detail/${resto.id}">${resto.name}</a></h1>
  <p class="row-item__description">${resto.description}</p>
</div>
</article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like resto" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeButtonTemplate = () => `
  <button aria-label="unlike resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  DetailRestoTemplate,
  ListRestoItemTemplate,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
};
