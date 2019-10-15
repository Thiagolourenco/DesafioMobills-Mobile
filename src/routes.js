import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/home';
import Register from './pages/register';
import Updates from './pages/update';
import ExampleDate from './pages/exampleDate';
import Login from './pages/login';
import RegisterUser from './pages/registerUser';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    RegisterUser,
    Home,
    Register,
    Updates,
  }),
);

export default Routes;
