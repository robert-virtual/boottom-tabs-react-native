import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { API, ApiRes, max, Pages, UserPages, UserType } from '../types';
import { Center } from './Center';
import { User } from './User';

interface Props {
    navigation:NativeStackNavigationProp<UserPages,'Profiles'> 
}


export const Profiles:React.FC<Props> = ({navigation})=> {

    const [users, setUsers] = useState<UserType[]>([])
    const [page, setPage] = useState<max>(1)

    const getData = async () => {

        
        const res = await fetch(`${API}/users?page=${page}`)
        const apiRes:ApiRes = await res.json()
        setUsers(apiRes.data)
        
    }

    useEffect(() => {
        getData()
    }, [page])

    const onPress = (item:UserType)=>{
        navigation.navigate('User',item)
    }

    if (users.length === 0) {
        return <Center><Text>cargando...</Text></Center>
    }
    return (
        <View style={styles.container}>
            <FlatList 
                data={users}
                renderItem={({item}) => <User onPress={()=> onPress(item)} user={item}/>}
                keyExtractor={item => item.email}/>
            <View style={styles.btns}>
                <Button onPress={()=> setPage(1)} title="Anterior"/>
                <Button onPress={()=> setPage(2)} title={'Next ' + page }/>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        display:'flex',
        flexDirection:'column',
        paddingBottom:5,
        justifyContent:'space-between'
    },
    btns:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:10,
    }
})