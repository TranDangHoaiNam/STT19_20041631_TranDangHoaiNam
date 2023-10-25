

// import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import Home from "./view/Screen_01";
import Screen_2 from "./view/Screen_02"
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={ {headerShown: false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name="Screen_2" component={Screen_2}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
    
       


    
// //   );
// // }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
  
    
// }
// );
