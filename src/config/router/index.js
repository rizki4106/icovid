import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Beranda,Global,Search,Maps,Error} from '../../pages';


const Tab = createBottomTabNavigator();

class App extends Component{
    render(){
        return(
            <>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" labelStyle={{backgroundColor: 'white', borderTopColor: '#dfd3d3', borderTopWidth: 1}}
                tabBarOptions={{
                    inactiveTintColor: '#dfd3d3',
                    activeTintColor: '#4A4F5D',
                    keyboardHidesTabBar: true,
                }}
                >
                    <Tab.Screen name="Home" component={Beranda} 
                    options={{
                        tabBarLabel: 'Beranda',
                        tabBarIcon: ({color}) => (<Icon name="home" color={color} size={25}/>)
                    }}
                    />
                    
                    <Tab.Screen
                    name="Global"
                    component={Global}
                    options={{
                        tabBarLabel: 'Dunia',
                        tabBarIcon: ({color}) => (<FontAwesome name="globe" size={25} color={color}/>)
                    }}
                    />

                    <Tab.Screen
                    name="Cari"
                    component={Search}
                    options={{
                        tabBarLabel: 'Cari',
                        tabBarIcon: ({color}) => (<Icon name="search1" color={color} size={25}/>)
                    }}
                    />

                    <Tab.Screen 
                    name="Lokasi" 
                    component={Maps}
                    options={{
                        tabBarLabel: 'Lokasi',
                        tabBarIcon: ({color}) => (<FontAwesome name="location-arrow" size={25} color={color}/>)
                    }}
                    />

                </Tab.Navigator>
            </NavigationContainer>
            </>
        )
    }
}


export default App;