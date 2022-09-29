import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DATA } from '../data'
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { PostList } from '../components/PostList'
import { StyleSheet, Text, View } from 'react-native'
const BookedScreen = ({ }) => {
    const navigation = useNavigation();

    const openPostHandler = (post) => {
        navigation.navigate('PostScreen', { postId: post.id, date: post.date, booked: post.booked })
    }

    const data = DATA.filter(el => el.booked)

    return (

        <PostList
            data={data}
            onOpen={openPostHandler}
        />

    )
}
BookedScreen.navigationOption = ({ navigation }) => ({
    headerTitle: 'Избранное',
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
export default BookedScreen