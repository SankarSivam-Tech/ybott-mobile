import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Dimensions, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'

const Index = () => {
    const router = useRouter()
    const { width, height } = Dimensions.get('window')
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="absolute inset-0">
                <Image
                    source={require("../assets/images/Introduction.svg")}
                    style={{
                        width: width,
                        height: height,
                        position: 'absolute',
                        top: 0,
                        left: 0
                    }}
                    contentFit="cover"
                />
                <View className="absolute inset-0 bg-black/50" />
            </View>
            <View className="flex-1 justify-center items-center">
                <Image
                    source={require("../assets/images/Logo.png")}
                    style={{ width: 250, height: 250 }}
                    contentFit="contain"
                />
                <TouchableOpacity
                    className="bg-orange-500 w-[80%] py-4 rounded-full -mt-10"
                    onPress={() => router.push('/login')}
                >
                    <Text className="text-white text-lg font-semibold text-center">
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default Index