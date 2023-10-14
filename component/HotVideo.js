import {StyleSheet, Text, View, ScrollView, Image} from 'react-native'


const videoImageList = [
    {
        id: '111',
        image: 'https://pbs.twimg.com/amplify_video_thumb/1712845834537390080/img/P5tcuznhpI-7fGSJ.jpg',
        viewCount: '25.6K',
    },
    {
        id: '333',
        image: 'https://pbs.twimg.com/amplify_video_thumb/1712845834537390080/img/P5tcuznhpI-7fGSJ.jpg',
        viewCount: '25.6K',
    },
    {
        id: '1311',
        image: 'https://pbs.twimg.com/amplify_video_thumb/1712845834537390080/img/P5tcuznhpI-7fGSJ.jpg',
        viewCount: '25.6K',
    },
]

export default function HotVideo () {
    return (
        <View style={styles.hotVideoContainer}>
            <Text style={styles.title}>Videos for you</Text>
            <Text>Check out these popular and trending videos for you</Text>
            <ScrollView horizontal={true}>
                {videoImageList.map(item => (
                    <View key={item.id} style={styles.imageContainer}>
                        <Image source={{
                            uri: `${item.image}`,
                        }}
                        style={{ 
                            width: 150, 
                            height: 200,
                            borderRadius: 20
                        }}
                        >
                        </Image>
                        <View style={styles.playButton}>
                            <View style={styles.innerButton}></View>
                        </View>
                        <View style={styles.viewCount}>
                            <Text style={styles.viewCountText}>{item.viewCount}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    hotVideoContainer: {
        marginTop: 30,
        height: 260,
        paddingLeft: 10
    },
    imageContainer: {
      marginRight: 10,
      marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 900,
    },
    playButton: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: '#72b6f4',
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -15,
        marginTop: -15,
        borderColor: 'white',
        borderWidth: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerButton: {
        marginLeft: 2,
        height: 0,
        width: 0,
        borderLeftWidth: 10,
        borderTopWidth: 8,
        borderRightWidth: 0,
        borderBottomWidth: 8,
        borderColor: 'transparent',
        borderLeftColor: 'white'
    },
    viewCount: {
        height: 20,
        width: 60,
        borderRadius: 15,
        backgroundColor: 'gray',
        opacity: 0.6,
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '85%',
        left: '8%',
    },
    viewCountText: {
        color: 'white'
    }
  });