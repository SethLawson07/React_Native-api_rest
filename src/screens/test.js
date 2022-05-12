//https://dev.to/silvenleaf/fetch-api-easiest-explanation-part-4-4-delete-by-silvenleaf-4376
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View,ScrollView,Button,StyleSheet } from 'react-native';


export default App = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);


  const getUtilisateurs = async () => {
     try {
      //const response = await fetch('https://reactnative.dev/movies.json');
      const response = await fetch('http://192.168.1.68:3002/api/v1/utilisateurs')
     const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  

  const DeleteUtilisateurs = (id) => {
    fetch('http://192.168.1.68:3002/api/v1/utilisateurs/'+id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: null
})
.then(response => {
    return response.json( )
})
.then(data => 
    // this is the data we get after putting our data, do whatever you want with this data
    console.log(data) 
);getUtilisateurs();
  }

 /* mybuttonclick(movieTitle) {
    Alert.alert(movieTitle)
}*/


  

  useEffect(() => {
    getUtilisateurs();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? <ActivityIndicator/> : (
      
      <FlatList
        data={data}
        keyExtractor={({ _id }, index) => _id}
        renderItem={({ item }) => (
          <ScrollView>
            <View>
          <Text>{item.noms}  {item.adresse}  {item.telephone}  
          <Button
           title="Modifier" 
          onPress={() => navigation.navigate('update', { id: item._id,nom :item.noms, adresse : item.adresse ,telephone : item.telephone })
    }
     />
          <Button style={styles.button} title="Supprimer" onPress={()=> DeleteUtilisateurs(item._id)} />
         </Text>
         </View>
          </ScrollView>
        )}
      />
    )}
      
    </View>
  );
};



const styles = StyleSheet.create({
  button: {
    backgroundColor : '#FF0000'
  },

});
