import UrlParser from '../../routes/url-parser';
import RestoDbSource from '../../data/resto-dbsource';
import { DetailRestoTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const DetailResto = {
  async render() {
    return `<h1 class="explore__label">Detail Restaurant</h1>
    <div class="rows" id="detail-rest">

    </div>
    <div id="likeButtonContainer"></div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestoDbSource.detailResto(url.id);
    const restoContainer = document.querySelector('#detail-rest');
    restoContainer.innerHTML = DetailRestoTemplate(resto);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto,
    });
  },
};

export default DetailResto;
