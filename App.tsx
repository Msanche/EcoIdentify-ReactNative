import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
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
      <View style={styles.inputContainer}>
        <Image source={require('./src/Icons/profile.png')} style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      
      <View style = {styles.button}>
      <Button title="Entrar" onPress={handleLogin} />
      </View>
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {

    marginBottom: 2,
    padding: 5,

  },
  button:{
    marginBottom: 10 
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
