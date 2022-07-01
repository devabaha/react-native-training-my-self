import Login from '../components/Login';
import GetStarted from '../components/GetStarted';
import Home from '../components/Home';

const publicRoutes = [
  {
    name: 'GetStarted',
    component: GetStarted,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Login',
    component: Login,
    options: {
      headerShown: false,
    },
  },
  {
    name: 'Home',
    component: Home,
    options: {
      headerShown: false,
    },
  },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
