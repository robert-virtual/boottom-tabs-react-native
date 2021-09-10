import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import { Pages } from '../types';

interface Props {
    navigation:NativeStackNavigationProp<Pages>
    route:any 
}

export const SingleUser:React.FC<Props> = ({navigation,route})=> {

    
    return (
        <View>

        </View>
    )

}