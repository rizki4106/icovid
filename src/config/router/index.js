import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Home,Statistik,Search,Maps,Error} from '../../pages';


const Tab = createBottomTabNavigator();

class App extends Component{
    render(){
        return(
            <>
            <NavigationContainer>
                <Tab.Navigator initialRouteName="Home" labelStyle={{backgroundColor: 'white', borderTopColor: '#dfd3d3', borderTopWidth: 1}}
                tabBarOptions={{
                    inactiveTintColor: '#dfd3d3',
                    activeTintColor: '#2181E1',
                    keyboardHidesTabBar: true,
                }}
                >
                    <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarLabel: 'home',
                        tabBarIcon: ({color}) => (<Icon name="home" color={color} size={25}/>)
                    }}
                    />
                    <Tab.Screen name="Statistik" component={Statistik}
                    options={{
                        tabBarLabel: 'statistik',
                        tabBarIcon: ({color}) => (<Icon name="bar-chart" color={color} size={25}/>)
                    }}
                    />
                    <Tab.Screen name="Search" component={Search}
                    options={{
                        tabBarIcon: 'telusuri',
                        tabBarIcon: ({color}) => (<Icon name="search" color={color} size={25}/>)
                    }}
                    />

                    <Tab.Screen name="Maps" component={Maps}
                    options={{
                        tabBarLabel: 'tracker',
                        tabBarIcon: ({color}) => (<Icon name="location-arrow" color={color} size={25}/>)
                    }}
                    />
                    

                </Tab.Navigator>
            </NavigationContainer>
            </>
        )
    }
}


export default App;