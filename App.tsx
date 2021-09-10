import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from './components/Home';
import { Favorites } from './components/Favorites';
import { Pages } from './types';
import { UsersRouter } from './UsersRouter';



const Tabs = createBottomTabNavigator<Pages>()



export default function App() {
  return (
    <NavigationContainer >
      <Tabs.Navigator>
        <Tabs.Screen 
          options={{tabBarIcon: ({color}) => <Ionicons size={20} name="home" color={color} />}} 
          name="Home" component={Home} />
        <Tabs.Screen 
          options={{tabBarIcon: ({color}) => <Ionicons size={20} name="person" color={color} />}} 
          name="Users" component={UsersRouter} />
        <Tabs.Screen 
          options={{tabBarIcon: ({color}) => <Ionicons size={20} name="heart" color={color} />}} 
          name="Favorites" component={Favorites} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}


