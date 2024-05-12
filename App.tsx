import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para el registro
    console.log('Registro de nuevo usuario');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        EcoIdentify
      </Text>
      {/*Esto es el input de usuario */}
      <View style={styles.inputContainer}>
        <Image source={require('./src/Icons/profile.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      {/*Esto es el input de contraseña */}

      <View style={styles.inputContainer}>
        <Image source={require('./src/Icons/passwd.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          value={password}
        />
      </View>
      
      <TouchableOpacity onPress={handleLogin} style={[styles.button, { backgroundColor: '#3498db' }]}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.register}>
      <TouchableOpacity onPress={handleRegister}>
        <Text style={styles.text2}>No tienes una cuenta?</Text>
        <Text style={styles.text}>Crear</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  register:{
    flexDirection: 'row',
    alignItems: 'center', // Ajusta según sea necesario
  },
  text: {
    fontSize: 13,
    color: 'black',
    textDecorationLine: 'underline',
  },
  text2:{
    fontSize: 13,
    color: 'black',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop:3
  },
  input: {
    marginBottom: 2,
    padding: 5,

  },
  button:{
    marginBottom: 10, 
    borderRadius:25,
    width:180,
    height:30,
    alignItems:'center'
  },
  title:{
    fontSize:30,
    marginBottom:40
  },
  icon: {
    marginLeft: 10,
    width: 24,
    height: 24,
    padding:10,
    resizeMode:'stretch',
    alignItems:'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height:50,
    marginBottom: 10,
    borderColor: '#ccc',
    borderRadius: 25,
    borderWidth: 1,
  },
});

export default LoginScreen;
