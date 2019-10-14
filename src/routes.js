import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from './pages/home';
import Register from './pages/register';
import Updates from './pages/update';
import ExampleDate from './pages/exampleDate';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Register,
    Updates,
    ExampleDate,
  }),
);

export default Routes;
