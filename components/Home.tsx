
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Button, Text} from 'react-native';
import { Pages } from '../types';
import { Center } from './Center';

interface Props {
    navigation:NativeStackNavigationProp<Pages,'Home'> 
}

export const Home:React.FC<Props> = ({navigation})=> {

    return (
        <Center>
         <Text>Home!!!</Text>
         <Button onPress={()=> navigation.navigate('Favorites')} title="Favoritos"/>    
        </Center>
    )

}