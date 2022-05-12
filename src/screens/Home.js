import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Button, StyleSheet, Text, View,Alert } from "react-native";



const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Home({navigation}) {
  return (
    
    <View style={styles.container}>
      
    <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
   <StatusBar style="auto" />
   <Button
     title="Suivant" 
     onPress={() =>
      navigation.navigate('test', { name: 'Jane' })
    }
     />
 </View>
  
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  }
});
