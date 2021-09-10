import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text } from 'react-native';
import { Pages } from '../types';
import { Center } from './Center';

interface Props {
    navigation:NativeStackNavigationProp<Pages,'Favorites'> 

}

export const Favorites:React.FC<Props> = ()=> {

    return (
        <Center>
         <Text>Favorites</Text>    
        </Center>
    )

}