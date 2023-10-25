import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Picker, FlatList, TouchableOpacity } from 'react-native';

export default function App() {
  const ambulancias = ["Ambulancia 1", "Ambulancia 2", "Ambulancia 3", "Ambulancia 4", "Ambulancia 5"];

  const pickerStyle = {
    backgroundColor: '#69C7C9',
  };

  const handleSearch = () => {
    
  };

  return (
    
    <View style={styles.container}>
      
      
      
      <View style={[styles.formContainer, styles.listBackground, { width: '80%' }]}>
        <Text style={[styles.textLabel, { marginLeft: '15%' }]}>Elige una ambulancia</Text>
        <TextInput
          style={[styles.input, styles.space, { width: '70%', marginLeft: '15%' }]}
          placeholder="Buscar"
        />
        <Text style={[styles.textLabel, { marginLeft: '15%' }]}>Seleccione un filtro</Text>
        <Picker
          style={[styles.select, pickerStyle, styles.space, { width: '70%', marginLeft: '15%' }]}
        />
        <View style={[styles.buttonContainer, { width: '25%', marginLeft: '15%' }]}>
          <TouchableOpacity style={styles.buttonBackground} onPress={handleSearch}>
            <Text style={styles.buttonText}>Buscar</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={[styles.listContainer, styles.listBackground, { marginTop: 20, width: '80%' }]}>
        <FlatList
          data={ambulancias}
          renderItem={({ item }) => (
            <Text style={styles.listItem}>{item}</Text>
          )}
          keyExtractor={(item) => item}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    marginBottom: 20,
    width: '100%',
  },
  listContainer: {
    width: '100%',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'turquoise',
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  select: {
    width: '100%',
    height: 50,
    borderColor: '#69C7C9',
    backgroundColor: '#69C7C9',
    borderWidth: 1,
    marginBottom: 10,
  },
  space: {
    marginBottom: 20,
  },
  listBackground: {
    backgroundColor: '#EAE9E9',
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    width: '25%',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#69C7C9',
    padding: 10,
  },
  navItem: {
    color: 'white',
    fontSize: 18,
  },
  buttonBackground: {
    backgroundColor: '#69C7C9',
    borderRadius: 10,
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  textLabel: {
    textAlign: 'left',
    marginBottom: 5,
  },
});
