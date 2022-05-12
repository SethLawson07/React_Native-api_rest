import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ImageBackground,Button, StyleSheet, Text, View,Alert,TextInput } from "react-native";
import getUtilisateurs from "./test";

  

export default function update({navigation,route}) {
  const [nom, onChangeNom] = React.useState(route.params.nom);
  const [adress, onChangeAdresse] = React.useState(route.params.adresse);
  const [number, onChangeNumber] = React.useState(route.params.telephone);

    
  const Modifier =  () => {

    fetch('http://192.168.1.68:3002/api/v1/utilisateurs/'+route.params.id, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      _id : route.params.id,  
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
    Modifier();
    Redirect();
    
    
  };

  return (
    
    <View style={styles.container}>
      

   <StatusBar style="auto" />
   <Text  style={styles.text}>Modifier</Text>
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
      <Text>{route.params.id} </Text>
      <Button
       title="Modifier"
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
