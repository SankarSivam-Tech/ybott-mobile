import { Ionicons } from '@expo/vector-icons'
import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
const profile = () => {
    const router = useRouter()
    const { width, height } = Dimensions.get('window')
    return (
        <SafeAreaView className="flex-1 bg-black">
            <View className="absolute inset-0">
                <Image
                    source={require("../../assets/images/Introduction.svg")}
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
            <View className="flex-1 items-center px-5 my-16">
                 <TouchableOpacity>
                    <View className="mb-8">
                    <Ionicons name="person-circle" size={120} color="rgba(255, 255, 255, 0.5)" />
                </View>
                
                 </TouchableOpacity>
             
                 <View className="w-full space-y-4">
                    <TextInput
                        placeholder='Enter your username'
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        className="border border-white rounded-full text-white px-4 py-3 w-full text-center bg-[#525252] "
                        keyboardType='default'
                    />
                    <TextInput
                        placeholder='Enter your email'
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        className="border border-white rounded-full text-white px-4 py-3 w-full text-center bg-[#525252] mt-4"
                        keyboardType='email-address'
                    />
                    <TextInput
                        placeholder='Enter your phone number'
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        className="border border-white rounded-full text-white px-4 py-3 w-full text-center bg-[#525252] mt-4"
                        keyboardType='phone-pad'
                    />
                    <TextInput
                        placeholder='Enter your bio'
                        placeholderTextColor="rgba(255, 255, 255, 0.7)"
                        className="border border-white rounded-full text-white px-4 py-3 w-full text-center bg-[#525252] mt-4"
                        keyboardType='default'
                        multiline={true}
                    />
                     <TouchableOpacity className="bg-orange-500 w-full py-3 rounded-full mt-4" onPress={() => router.push("../(auth)/login")}>
                               <Text className="text-white text-lg font-semibold text-center">
                                 Submit
                               </Text>
                </TouchableOpacity>
                   
                </View>
            </View>
        </SafeAreaView>
    )
}


export default profile