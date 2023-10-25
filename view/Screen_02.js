import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';

export default function Screen_02(navigation) {
  return (
    <View style={styles.container}>
      <view>
      <Image
            source={require("../assets/Image 9.png")}
            style={[styles.Image, { width: 268, height: 240 }]}
          />
      </view>
      
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