import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Home, Data, Error} from '../../pages';
const Stack = createStackNavigator();

function App(){
    return(
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Data" component={Data}/>
            <Stack.Screen name="Error" component={Error}/>
        </Stack.Navigator>
    </NavigationContainer>
    )
}

export default App;