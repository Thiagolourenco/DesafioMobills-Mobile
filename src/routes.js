import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/home';
import Register from './pages/register';
import Updates from './pages/update';
import ExampleDate from './pages/exampleDate';
import Login from './pages/login';
import SignUp from './pages/signUp';

const Routes = createAppContainer(
  createSwitchNavigator({
    Login,
    SignUp,
    Home,
    Register,
    Updates,
  }),
);

export default Routes;
