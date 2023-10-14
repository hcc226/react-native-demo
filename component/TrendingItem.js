import {View, Text, StyleSheet} from 'react-native'

const style = StyleSheet.create({
    trendingItem: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
        // height: 30,
        // width: '100%'
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        height: 30
    },
    titleText: {
        fontSize: 14,
        color: 'gray'
    },
    tagText: {
        fontSize: 15,
        fontWeight: 500,
    }
})

export default function TrendingItem (props)  {
    console.log(props)
    const {title, tag, postCount} = props.trendData;
    return (
        <View style={{...style.trendingItem, height: 80}}>
            <View style={style.content}>
                <Text style={style.titleText}>{title}</Text>
                <Text style={style.tagText}>{tag}</Text>
                <Text style={style.titleText}>{postCount} posts</Text>
            </View>
            <View>
                <Text>...</Text>
            </View>
        </View>
    )
}

