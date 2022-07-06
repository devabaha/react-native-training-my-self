import Login from '../components/Login';
import GetStarted from '../components/GetStarted';
import Feed from '../components/Feed';
import {navigationStrings} from '../constants';

const publicRoutes = [
  {
    name: navigationStrings.GET_STARTED,
    component: GetStarted,
    options: {
      headerShown: false,
    },
  },
  {
    name: navigationStrings.LOGIN,
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: navigationStrings.FEED,
    component: Feed,
    options: {
      headerShown: false,
    },
  },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
