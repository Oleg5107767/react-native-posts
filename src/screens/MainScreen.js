import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { PostList } from '../components/PostList'


const MainScreen = (props) => {
    const navigation = useNavigation();

    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', { postId: post.id, date: post.date, booked: post.booked })
    }

    return (
        <PostList
            data={DATA}
            onOpen={openPostHandler}
        />
    )
}

MainScreen.navigationOption = ({ navigation }) => ({
    headerTitle: 'Мой Блог',
    headerRight: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Take photo'
                iconName='ios-camera'
                onPress={() => navigation.navigate('Create')}
            />
        </HeaderButtons>
    ),
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
            <Item
                title='Togle Drawer'
                iconName='ios-menu'
                onPress={() => navigation.toggleDrawer()}
            />
        </HeaderButtons>
    )
})

export default MainScreen