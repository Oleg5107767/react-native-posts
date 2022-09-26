import React from 'react'
import { StyleSheet, Text, View, Button, FlatList } from 'react-native'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native';
import { DATA } from '../data';
import { Post } from '../components/Post';
//const NavigatePost = (props) => {
//    props.navigation.navigate('PostScreen')
//}

const MainScreen = (props) => {

    const navigation = useNavigation();

    const openPostHandler = (post) => {
        navigation.navigate('PostScreen',{postId: post.id, date: post.date})
    }
    return (
        <View style={styles.wrapper}>
            <FlatList
                data={DATA}
                keyExtractor={el => el.id.toString()}
                renderItem={({ item }) => <Post post={item} onOpen={openPostHandler} />}
            />
            <Button title="PostScreen" onPress={() => handler1()} />
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})

export default MainScreen