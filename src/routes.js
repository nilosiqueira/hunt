import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './pages/main';
import Product from './pages/product';

const AppNavigator = createStackNavigator({
    Main,
    Product
  }, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: "#fff"
        },
        headerTintColor: "#000"
    }
  });
  
  export default createAppContainer(AppNavigator);