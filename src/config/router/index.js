import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { FontAwesome } from 'react-native-vector-icons';
import {Beranda,Global,Search,Maps,Error} from '../../pages';


const Tab = createMaterialBottomTabNavigator();

class App extends Component{
    render(){
        return(
            <>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" activeColor="gray" inactiveColor="#dfd3d3" barStyle={{backgroundColor: 'white', borderTopColor: '#dfd3d3', borderTopWidth: 1}}>
                    <Tab.Screen name="Home" component={Beranda} 
                    navigationOptions={{
                        tabBarLabel: 'Home',
                        tabBarIcon: () => (
                            <FontAwesome name="home" color={'red'} size={25}/>
                        )
                    }}/>
                    
                    <Tab.Screen
                    name="Global"
                    component={Global}
                    navigationOptions={{
                        tabBarLabel: 'Global',
                        tabBarIcon: ({ color }) => (
                        <FontAwesome name="Home" color={color} size={25}/>),
                    }}
                    />

                    <Tab.Screen
                    name="Search"
                    component={Search}
                    navigationOptions={{
                        tabBarLabel: 'Search',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="search" color={color} size={26}/>
                        )
                    }}
                    />

                    <Tab.Screen 
                    name="Maps" 
                    component={Maps}
                    navigationOptions={{
                        tabBarLabel: 'Maps',
                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" color={color} size={26}/>
                        )
                    }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
            </>
        )
    }
}


export default App;