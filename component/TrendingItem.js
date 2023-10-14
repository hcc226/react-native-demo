import {View, Text, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    trendingItem: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 0
        // height: 30,
        // width: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        height: 30
    }
})

export default function TrendingItem (props)  {
    console.log(props)
    const {title, tag, postCount} = props.trendData;
    return (
        <View style={{...style.trendingItem, height: 80}}>
            <View style={style.content}>
                <Text>{title}</Text>
                <Text>{tag}</Text>
                <Text>{postCount} posts</Text>
            </View>
            <View>
                <Text>...</Text>
            </View>
        </View>
    )
}

