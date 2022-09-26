import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//import { MainScreen } from '../screens/MainScreen'
import MainScreen from '../screens/MainScreen'
import PostScreen from '../screens/PostScreen'
import { THEME } from '../theme'




export const AppNavigation = () => {
    const Stack = createNativeStackNavigator();
    //const { date } = route.params
    return (
        <Stack.Navigator
            /*initialRouteName='MainScreen'*/
            screenOptions={{
                headerStyle: {
                    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
                },
                headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR ,
            }}
        >
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ title: 'Мой Блог' }} />
            <Stack.Screen 
                name="PostScreen" 
                component={PostScreen} 
                /*options={ () => ({ title: 'Пост от '}) }*/
                options={({ route }) => ({ title: 'Пост от ' +  new Date(route.params.date).toLocaleDateString()})}
            />
        </Stack.Navigator>
    )
}



