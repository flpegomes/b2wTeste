import { createMaterialTopTabNavigator , createAppContainer } from 'react-navigation';
import Home from './views/Home'
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons'
import Promocao from './views/Promocao';
import Carrinho from './views/Carrinho';

const TabNavigator = createMaterialTopTabNavigator({
    Inicio: {
        screen: Home,
        navigationOptions: {
            title: 'Início'
        }
    },
    Promocao: {
        screen: Promocao,
        navigationOptions: {
            title: 'Promoção'
        }
    },
    Carrinho: {
        screen: Carrinho,
        navigationOptions: {
            title: 'Carrinho'
        }
    },

}, 
{
    tabBarOptions: {
        style: {
            backgroundColor: '#a8000e'
        },
        indicatorStyle: {
            backgroundColor: '#fff'
        }
        
    },
    
    
});
  
export default createAppContainer(TabNavigator);