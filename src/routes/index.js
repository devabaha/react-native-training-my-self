import Login from '../components/Login';
import GetStarted from '../components/GetStarted';
import Home from '../components/Launch/screens/Home';
import Launch from '../components/Launch';

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
    name: 'Launch',
    component: Launch,
    options: {
      headerShown: false,
    },
  },
];

const privateRoutes = [];

export {publicRoutes, privateRoutes};
