import React from 'react';
import {TouchableOpacity, View, Text, TextInput, Button, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.child}>
          <View style={styles.centerContent}>
            <Text style={styles.heading}>Inicio de sesión</Text>
            <Text>Correo electrónico</Text>
            <TextInput
              style={styles.input}
              placeholder="Correo"
            />
            <Text>Contraseña</Text>
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} >
            <Text style={styles.buttonText}>Ingresar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        
        <View style={[styles.child, {backgroundColor: '#B1B1B1'}]}>
          <View style={styles.centerContent}>
            <Text style={styles.heading}>¿Aún no tienes una cuenta?</Text>
            <Text style={styles.text}>Regístrate para acceder a todas{'\n'}las funcionalidades</Text>
            <TouchableOpacity style={[styles.button]} >
            <Text style={styles.buttonText}>Crear cuenta</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  child: {
    width: 500,
    height: 500,
    backgroundColor: '#EDEDED',
    borderRadius: 8,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 30,
  },
  input: {
    height: 40,
    width: 200,
    borderColor: '#69C7C9',
    borderWidth: 3,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 20,
    backgroundColor: '#FeFeFe'
  },
  button:{
    height: 35,
    width: 120,
    borderColor: '#499fa1',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent:'center',
    backgroundColor: '#499fa1',
    padding: 10,
  },
  text: {
    padding:15,
    textAlign: 'center',
    
  },
  buttonText:{
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default App;