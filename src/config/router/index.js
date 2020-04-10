import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Icon } from 'react-native-vector-icons';
import {Beranda, Maps,Error} from '../../pages';


const Tab = createMaterialBottomTabNavigator();

const App = () => {
    return(
    <NavigationContainer>
    <Tab.Navigator initialRouteName="Home" activeColor="gray" inactiveColor="#dfd3d3" barStyle={{backgroundColor: 'white', borderTopColor: '#dfd3d3', borderTopWidth: 1,}}>
        <Tab.Screen name="Home" component={Beranda} options={{
            TabBarLabel: 'Home',
            TabBarIcon: () => (
                <Icon name="home" size={25}/>
            )
        }}/>
        <Tab.Screen 
        name="Maps" 
        component={Maps}
        options={{
            tabBarLabel: 'Maps',
            TabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26}/>
            )
        }}
        />
    </Tab.Navigator>
    </NavigationContainer>
    // <NavigationContainer>
    //     <Stack.Navigator initialRouteName="Home" headerMode="none">
    //         <Stack.Screen name="Home" component={Home}/>
    //         <Stack.Screen name="Data" component={Data}/>
    //         <Stack.Screen name="Error" component={Error}/>
    //     </Stack.Navigator>
    // </NavigationContainer>
    )
}

export default App;