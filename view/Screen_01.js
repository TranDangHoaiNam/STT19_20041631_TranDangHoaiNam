import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import Screen_2 from "./Screen_02"
import { useNavigation } from '@react-navigation/native';
export default function Screen_1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <view>
      <Image
            source={require("../assets/Image 9.png")}
            style={[styles.Image, { width: 268, height: 240 }]}
          />
      </view>
      <view style={{ fontsize: '260px', fontWeight: 400}}>
        <text >Welcome</text>
      </view>
      <view style={{fontsize: 30, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontsize: 30, alignItems: 'center', justifyContent: 'center'}}>
          Capture and oranganize your thoughts, ideas, and information with ease
        </Text>
      </view>
      <Pressable
         onPress={()=>{
          navigation.navigate('Screen_2')
         }}
          style={{
            width: 332,
            height: 34,
            borderWidth: 1,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "100px",
            backgroundColor: 'pink'
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: 400, marginTop: -5 }}>
            Get Started
          </Text>
          
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});