import { createStackNavigator } from '@react-navigation/stack'; 
import home from './pages/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Receita2 from './components/receita2';
import Receita1 from './components/receita1';
import Receita3 from './components/receita3';
import Receita4 from './components/receita4';
import Receita5 from './components/receita5';
import Receita6 from './components/receita6';
import Receita7 from './components/receita7';
import Receita8 from './components/receita8';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Routes(){
    return(
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="home" component={home} />
            <Stack.Screen name="receita1" component={Receita1} />
            <Stack.Screen name="receita2" component={Receita2} />
            <Stack.Screen name="receita3" component={Receita3} />
            <Stack.Screen name="receita4" component={Receita4} />
            <Stack.Screen name="receita5" component={Receita5} />
            <Stack.Screen name="receita6" component={Receita6} />
            <Stack.Screen name="receita7" component={Receita7} />
            <Stack.Screen name="receita8" component={Receita8} />
        </Stack.Navigator>
    )
}

// function BottomRoutes(){
//     return(
//         <Tab.Navigator>
//             <Tab.Screen name='Saldo' component={Saldo}/>
//             <Tab.Screen name='Carona' component={Carona}/>
//             <Tab.Screen name='Entrega' component={Entrega}/>
//         </Tab.Navigator>
//     )
// }

export {Routes};