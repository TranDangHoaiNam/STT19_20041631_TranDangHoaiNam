// import { useState } from "react";
// import {
//   FlatList,
//   Image,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";

// const arr = [
//     {
//         id: 1,
//         img: require('../assets/Avatar 3.png'),
//         name: 'Amelia Hebrew',
//         mobile: 123123,
//         work: 98732131,
//         home: 789-1112,
//         email: 'AvaSavanat@Example.com',
//         address: '4517 Washington ave mancheter, KentucKy'

//     },
//     {
//         id: 2,
//         img: require('../assets/Avatar 4.png'),
//         name: 'Amelia Hebrew',
//         mobile: 123123,
//         work: 98732131,
//         home: 789-1112,
//         email: 'AvaSavanat@Example.com',
//         address: '4517 Washington ave mancheter, KentucKy'
        
//     },
//     {
//         id: 3,
//         img: require('../assets/Avatar 4 (1).png'),
//         name: 'Amelia Hebrew',
//         mobile: 123123,
//         work: 98732131,
//         home: 789-1112,
//         email: 'AvaSavanat@Example.com',
//         address: '4517 Washington ave mancheter, KentucKy'
        
//     },
//     {
//         id: 4,
//         img: require('../assets/Avatar 4 (2).png'),
//         name: 'Amelia Hebrew',
//         mobile: 123123,
//         work: 98732131,
//         home: 789-1112,
//         email: 'AvaSavanat@Example.com',
//         address: '4517 Washington ave mancheter, KentucKy'
        
//     },
//     {
//         id: 5,
//         img: require('../assets/Avatar 4 (3).png'),
//         name: 'Amelia Hebrew',
//         mobile: 123123,
//         work: 98732131,
//         home: 789-1112,
//         email: 'AvaSavanat@Example.com',
//         address: '4517 Washington ave mancheter, KentucKy'
        
//     }

// ];
// export default function Screen2({ navigation }) {
//   const [data, setData] = useState(arr);
//   const [state, setState] = useState(1);
//   return (
//     <ScrollView>
//       <View style={styles.container}>
//         <View
//           style={{
//             flexDirection: "row",
//             alignItems: "center",
//             justifyContent: "space-between",
//             width: "100%",
//           }}
//         >
//           <Pressable
//             onPress={() => {
//               setData(arr);
//               setState(1);
//             }}
//             style={styles.btn}
//           >
//             <Text
//               style={{
//                 color:
//                   state == 1
//                     ? "rgba(233, 65, 65, 1)"
//                     : "rgba(190, 182, 182, 1)",
//               }}
//             >
//               Home
//             </Text>
//           </Pressable>
//           <Pressable
//             onPress={() => {
//               setData([
//                 ...arr.filter((x) => {
//                   return x.type == "RB";
//                 }),
//               ]);
//               setState(2);
//             }}
//             style={styles.btn}
//           >
//             <Text
//               style={{
//                 color:
//                   state == 2
//                     ? "rgba(233, 65, 65, 1)"
//                     : "rgba(190, 182, 182, 1)",
//               }}
//             >
//              Contact
//             </Text>
//           </Pressable>
// <Pressable
//             onPress={() => {
//               setData([
//                 ...arr.filter((x) => {
//                   return x.type == "MT";
//                 }),
//               ]);
//               setState(3);
//             }}
//             style={styles.btn}
//           >
//             <Text
//               style={{
//                 color:
//                   state == 3
//                     ? "rgba(233, 65, 65, 1)"
//                     : "rgba(190, 182, 182, 1)",
//               }}
//             >
//               Search
//             </Text>
//           </Pressable>
//         </View>
//         <View>
//           <FlatList
//             data={data}
//             numColumns={2}
//             renderItem={({ item }) => {
//               return (
//                 <Pressable
//                   onPress={() => {
//                     navigation.navigate("Screen3", item);
//                   }}
//                   style={{
//                     width: 167,
//                     height: 200,
//                     backgroundColor: "rgba(247, 186, 131, 0.15)",
//                     alignItems: "center",
//                     // justifyContent: "space-around",
//                     // margin: 10,
//                     // flexDirection: 'column'
//                   }}
//                 >
//                   <Image
//                     source={item.img}
//                     style={{ width: 108, height: 124 }}
//                     resizeMode="contain"
//                   />
//                   <Text>{item.name}</Text>
//                   <Text>$ {item.price}</Text>
//                 </Pressable>
//               );
//             }}
//           />
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: 375,
//     height: 812,
//     alignItems: "center",
//     justifyContent: "space-around",
//     padding: 10,
//   },
//   btn: {
//     width: 99,
//     height: 32,
//     alignItems: "center",
//     justifyContent: "center",
//     borderWidth: 1,
//     borderColor: "rgba(233, 65, 65, 0.53)",
//     borderRadius: 5,
//   },
// });
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const arr = [
    {
        id: 1,
        img: require('../assets/Avatar 3.png'),
        name: 'Amelia Hebrew',
        mobile: 123123,
        work: 98732131,
        home: 789-1112,
        email: 'AvaSavanat@Example.com',
        address: '4517 Washington ave mancheter, KentucKy'

    },
    {
        id: 2,
        img: require('../assets/Avatar 4.png'),
        name: 'Amelia Hebrew',
        mobile: 123123,
        work: 98732131,
        home: 789-1112,
        email: 'AvaSavanat@Example.com',
        address: '4517 Washington ave mancheter, KentucKy'
        
    },
    {
        id: 3,
        img: require('../assets/Avatar 4 (1).png'),
        name: 'Amelia Hebrew',
        mobile: 123123,
        work: 98732131,
        home: 789-1112,
        email: 'AvaSavanat@Example.com',
        address: '4517 Washington ave mancheter, KentucKy'
        
    },
    {
        id: 4,
        img: require('../assets/Avatar 4 (2).png'),
        name: 'Amelia Hebrew',
        mobile: 123123,
        work: 98732131,
        home: 789-1112,
        email: 'AvaSavanat@Example.com',
        address: '4517 Washington ave mancheter, KentucKy'
        
    },
    {
        id: 5,
        img: require('../assets/Avatar 4 (3).png'),
        name: 'Amelia Hebrew',
        mobile: 123123,
        work: 98732131,
        home: 789-1112,
        email: 'AvaSavanat@Example.com',
        address: '4517 Washington ave mancheter, KentucKy'
        
    }

];
export default function Screen_02({ navigation }) {
  const [data, setData] = useState(arr);
  const [state, setState] = useState(1);
  return (
    <ScrollView>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          
        </View>
        <View>
          <FlatList
            data={data}
            numColumns={1}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => {
                    navigation.navigate("Screen3", item);
                  }}
                  style={{
                    width: 400,
                    height: 100,
                    backgroundColor: "rgba(247, 186, 131, 0.15)",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    margin: 10,
                  }}
                >
                  <Image
                    source={item.img}
                    style={{ width: 10, height: 12 }}
                    resizeMode="contain"
                  />
                  <Text>{item.name}</Text>
                  <Text> {item.mobile}</Text>
                </Pressable>
              );
            }}
          />
        </View>
</View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 375,
    height: 812,
    alignItems: "center",
    justifyContent: "space-around",
    padding: 10,
  },
  btn: {
    width: 99,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "rgba(233, 65, 65, 0.53)",
    borderRadius: 5,
  },
});