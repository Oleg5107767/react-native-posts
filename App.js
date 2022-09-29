import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AppLoading } from 'expo'
import { bootstrap } from './src/bootstrap'
import { AppNavigation } from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'


//const Stack = createNativeStackNavigator(); /////navigation for APP

export default function App() {
  //const [isReady, setIsReady] = useState(false)
  //if (!isReady) {
  //  return (
  //    <AppLoading
  //      startAsync={bootstrap}
  //      onFinish={() => setIsReady(true)}
  //      onError={err => console.log(err)}
  //    />
  //  )
  //}
  //const fonts = !isReady ? <AppLoading startAsync={bootstrap} onFinish={() => setIsReady(true)} onError={err => console.log(err)} /> : null
  return (
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  )


  /////navigation for APP
  //return (
  //  <NavigationContainer>
  //      <Stack.Navigator initialRouteName='MainScreen'>
  //          <Stack.Screen name="MainScreen" component={MainScreen} />
  //          <Stack.Screen name="PostScreen" component={PostScreen} />
  //      </Stack.Navigator>
  //  </NavigationContainer>
  //)

}
//const styles = StyleSheet.create({
//  center: {
//    flex: 1,
//    justifyContent: 'center',
//    alignItems: 'center'
//  }
//})