import FavoritesResto from '../../data/favorites-resto';
import { ListRestoItemTemplate } from '../templates/template-creator';

const LikeResto = {
  async render() {
    return ` 
        <h1 class="explore__label">Restaurant Favorites</h1>
        <div class="rows" id="rows">
    
        </div>`;
  },

  async afterRender() {
    const restos = await FavoritesResto.getAllRestos();
    const likeId = document.querySelector('#rows');
    restos.forEach((restaurants) => {
      likeId.innerHTML += ListRestoItemTemplate(restaurants);
    });
  },
};

export default LikeResto;
