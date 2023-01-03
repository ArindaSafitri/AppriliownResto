import RestoDbSource from '../../data/resto-dbsource';
import { ListRestoItemTemplate } from '../templates/template-creator';

const ListResto = {
  async render() {
    return ` 
    <h1 class="explore__label">Explore Restaurant</h1>
    <div class="rows" id="rows">

    </div>`;
  },

  async afterRender() {
    const restos = await RestoDbSource.ListResto();
    const restoId = document.querySelector('#rows');
    restos.forEach((restaurants) => {
      restoId.innerHTML += ListRestoItemTemplate(restaurants);
    });
  },

};

export default ListResto;
