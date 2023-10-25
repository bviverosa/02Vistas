import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topDiv}>
        {/* ... Código existente del menú ... */}
      </View>
      <View style={styles.middleDiv}>
        <View style={styles.leftMiddle}>
          <Text>Lorem Ipsum</Text>
        </View>
        <View style={styles.rightMiddle}>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nombre:</Text>
            <TextInput style={styles.input} placeholder="Nombre" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Correo Electrónico:</Text>
            <TextInput style={styles.input} placeholder="Correo Electrónico" />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Mensaje:</Text>
            <TextInput style={styles.input} placeholder="Mensaje" multiline={true} numberOfLines={4} />
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Enviar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomDiv}>
        {/* Contenido del div inferior */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topDiv: {
    flex: 5,
    backgroundColor: 'lightblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  menuButton: {
    padding: 10,
  },
  middleDiv: {
    flex: 45,
    flexDirection: 'row',
  },
  leftMiddle: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightMiddle: {
    flex: 1,
    justifyContent: 'center', // Centrar verticalmente
    alignItems: 'flex-start', // Alinear elementos a la izquierda
    paddingHorizontal: 20, // Espacio en los lados
  },
  inputContainer: {
    marginBottom: 10,
    width: '100%', // Asegurar que los elementos ocupen todo el ancho
  },
  label: {
    textAlign: 'left', // Alinear el label a la izquierda
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    borderRadius: 5,
    width: '100%', // Ocupar todo el ancho disponible
  },
  button: {
    backgroundColor: 'turquoise',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    width: '100%', // Ocupar todo el ancho disponible
  },
  buttonText: {
    color: 'white',
  },
  bottomDiv: {
    flex: 20,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
