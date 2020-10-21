
import HomePage from '../pages/home.f7.html';
import GalleryPage from '../pages/gallery.f7.html';
import ReservationPage from '../pages/reservation.f7.html';
import registerPage from '../pages/register.f7.html';
import loginPage from '../pages/login.f7.html';

import LeftPage1 from '../pages/left-page-1.f7.html';
import LeftPage2 from '../pages/left-page-2.f7.html';
import DynamicRoutePage from '../pages/dynamic-route.f7.html';
import RequestAndLoad from '../pages/request-and-load.f7.html';
import NotFoundPage from '../pages/404.f7.html';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/gallery/',
    component: GalleryPage,
  },
  {
    path: '/reservation/',
    component: ReservationPage,
  },
  {
    path: '/register/',
    component: registerPage,
  },
  {
    path: '/login/',
    component: loginPage,
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;