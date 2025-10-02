import { Image } from 'expo-image'
import { useRouter } from 'expo-router'
import { Dimensions, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
const signup = () => {
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
      <View className="flex-1 justify-center items-center px-5">
        <Image
          source={require("../../assets/images/Logo.png")}
          style={{ width: 250, height: 250 }}
          contentFit="contain"
        />

        <View className="w-full space-y-4 -mt-10">
          <TextInput
            placeholder='Enter your username'
            placeholderTextColor="white"
            className="border border-white rounded-full text-white px-4 py-3 w-full mt-4 text-center bg-[#525252]"
            keyboardType='default'
          />
          <TextInput
            placeholder='Enter your email'
            placeholderTextColor="white"
            className="border border-white rounded-full text-white px-4 py-3 w-full mt-4 text-center bg-[#525252]"
            keyboardType='email-address'
          />

          <TextInput
            placeholder='Enter your OTP'
            placeholderTextColor="white"
            keyboardType='numeric'
            className="border border-white rounded-full text-white px-4 py-3 w-full mt-4 text-center bg-[#525252]"
          />


          <TextInput
            placeholder='Enter your referral code'
            placeholderTextColor="white"
            keyboardType='name-phone-pad'
            className="border border-white rounded-full text-white px-4 py-3 w-full mt-4 text-center bg-[#525252]"
          />
          <TouchableOpacity className="bg-orange-500 w-full py-3 rounded-full mt-4" onPress={() => router.push("../(profile)/profile")}>
            <Text className="text-white text-lg font-semibold text-center">
              Signup
            </Text>
          </TouchableOpacity>

          <View className="flex flex-row justify-center items-center space-x-1 mt-4">
            <Text className="text-white">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push("/login")}>
              <Text className="text-orange-500 ml-1 font-medium">Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default signup