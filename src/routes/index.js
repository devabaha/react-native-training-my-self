import Login from '../components/Login';
import GetStarted from '../components/GetStarted';

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
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
