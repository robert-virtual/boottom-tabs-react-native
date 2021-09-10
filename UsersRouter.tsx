import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Profiles } from './components/Profiles';
import { User } from './components/User';
import { UserPages } from './types';

const Stack = createNativeStackNavigator<UserPages>()




interface Props {

}

export const UsersRouter:React.FC<Props> = ()=> {

    return (
        <Stack.Navigator screenOptions={{header: ()=> null}}>
            <Stack.Screen name="Profiles" component={Profiles} />
            <Stack.Screen name="User" component={User} />
        </Stack.Navigator>
    )

}
