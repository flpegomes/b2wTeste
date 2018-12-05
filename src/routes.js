import { createMaterialTopTabNavigator , createAppContainer } from 'react-navigation';
import Home from './views/Home'
import { default as MaterialIcons } from 'react-native-vector-icons/MaterialIcons'

const TabNavigator = createMaterialTopTabNavigator({
    Inicio: {
        screen: Home,
        navigationOptions: {
            title: 'Início'
        }
    },
    Promocao: {
        screen: Home,
    },
    Carrinho: {
        screen: Home,
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