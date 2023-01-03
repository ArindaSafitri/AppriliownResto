/* eslint-disable linebreak-style */
import ListResto from '../views/pages/listResto';
import DetailResto from '../views/pages/detailResto';
import LikeResto from '../views/pages/likeResto';

const routes = {
  '/': ListResto, // default
  '/home': ListResto,
  '/detail/:id': DetailResto,
  '/like': LikeResto,
};

export default routes;
