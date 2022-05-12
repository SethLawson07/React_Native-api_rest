import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Button, StyleSheet, Text, View,Alert,TextInput } from "react-native";





  

export default function register({navigation}) {
  const [nom, onChangeNom] = React.useState(null);
  const [adress, onChangeAdresse] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);


  const Ajouter =  () => {

  fetch('http://192.168.1.68:3002/api/v1/utilisateurs', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    noms: nom,
    adresse: adress,
    telephone : number
  }
  )
});

}

  const Redirect = () => {
     navigation.navigate('test', { name: 'Jane' })
  }

  const onPress = () => {
    Ajouter();
    Redirect();
   
  };

  return (
    
    <View style={styles.container}>
      

   <StatusBar style="auto" />
   <Text  style={styles.text}>Register</Text>
   <TextInput
        style={styles.input}
        onChangeText={onChangeNom}
        placeholder="Entrer votre nom"
        value={nom}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAdresse}
        placeholder="Entrer votre adresse"
        value={adress}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Text>Numero {number}</Text>
      <Button
       title="S'enregistrer"
       onPress={() => onPress() }

      
      
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
    color: "green",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop:50,
    
    //backgroundColor: "#000000c0"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:5
  },
});
