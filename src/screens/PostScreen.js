import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button, Image, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { DATA } from '../data';
import { AppHeaderIcon } from '../components/AppHeaderIcon'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import { THEME } from '../theme'

const PostScreen = ({ route }) => {

    const navigation = useNavigation();
    const { postId } = route.params
    const post = DATA.find(el => el.id === postId)

    //useEffect(() => {
    //    navigation.setParams({ booked: post.booked })
    //}, [])

    const removeHandler = () => {
        Alert.alert(
            "Удаление поста",
            "Вы точно хотите удалить пост?",
            [
                {
                    text: "Отменить",
                    style: "cancel"
                },
                { text: "Удалить", style: 'destructive', onPress: () => { } }
            ]
        )
    }
    return (
        <ScrollView >
            <Image source={{ uri: post.img }} style={styles.image} />
            <View style={styles.textWrap}>
                <Text style={styles.title}>
                    {post.text}
                </Text>
            </View>
            <Button title="Удалить" color={THEME.DANGER_COLOR} onPress={() => removeHandler()} />
        </ScrollView>
    )
}
PostScreen.navigationOption = ({ route }) => {
    const { date, booked } = route.params
    const iconName = booked ? 'ios-star' : 'ios-star-outline'

    return {
        headerTitle: 'Пост от ' + new Date(date).toLocaleDateString(),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                <Item
                    title='Take photo'
                    iconName={iconName}
                    onPress={() => console.log('press photo')}
                />
            </HeaderButtons>
        ),
    }
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10
    },
    title: {
        // fontFamily: 'open-regular'
    }
})
export default PostScreen;
