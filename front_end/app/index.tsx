import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';

interface Cliente {
  _id: string;
  cpf: string;
  nome: string;
  cep: string;
  telefone: string;
  email: string;
}

const API_URL = 'http://192.168.148.1:5000/clientes'; 

const cliente: Cliente[] = [{ _id: "abc123", cpf: "123", nome: "Daniele", cep: "123", telefone: "123", email: "s@gmail.com"}, { _id: "aaa123", cpf: "222", nome: "Euclides", cep: "564", telefone: "987", email: "euclides@gmail.com"}]

const HomeScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [places, setPlaces] = useState<Cliente[]>([]);

  useEffect(() => {
    //fetchPlaces();
    setPlaces(cliente)
  }, []);

  const fetchPlaces = async () => {
    try {
      const response = await axios.get(API_URL); 
      setPlaces(response.data); 
    } catch (error) {
      console.error("Erro ao carregar clientes", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Clientes</Text>
      <FlatList
        data={places}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.cpf}</Text>
            <Text>{item.nome}</Text>
            <Text>{item.cep}</Text>
            <Text>{item.telefone}</Text>
            <Text>{item.email}</Text>
          </View>
        )}
      />
      <Button
        title="Adicionar Cliente"
        //onPress={() => navigation.navigate('AddCliente')}  
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 10,
  },
});

export default HomeScreen;
