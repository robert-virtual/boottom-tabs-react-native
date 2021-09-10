import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { UserPages, UserType } from '../types';

interface Props {
    user:UserType
    onPress:( )=>void
    navigation?:NativeStackNavigationProp<UserPages,'User'> 
}

export const User:React.FC<Props> = ({user,onPress})=> {

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                style={styles.img} 
                source={{uri:user.avatar}} />
            <View style={{marginStart:10}}>
                <Text>{user.first_name + user.last_name}</Text>
                <Text>{user.email}</Text>
            </View>
        </TouchableOpacity>
    )

}

const styles = StyleSheet.create({
    card:{
        display:'flex',
        alignItems:'center',
        flexDirection:'row',
        padding:10,
        margin:5,
        borderRadius:10,
        backgroundColor:'white',
        elevation:1,
        height:100
    },
    img:{
        width:70,
        height:70
    }
})