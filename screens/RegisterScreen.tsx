import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';



const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmarPasswd, setConfirmarPasswd] = useState('');

  const handleRegister = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña', ConfirmarPasswd)
  };

  return (
    <View style={styles.container}>
      <View style={styles.UnderTittle}>
        <Image source={require('../src/images/Register.jpg')} style={styles.image}/>
      </View>
      {/*Esto es el input de usuario */}
      <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faUser} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={setUsername}
          value={username}
        />
      </View>
      {/*Esto es el input de contraseña */}

      <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faLock} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={setPassword}
          secureTextEntry
          value={password}
        />
      </View>
      
      {/*Login Button*/}
      <TouchableOpacity onPress={handleRegister} style={[styles.button]}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#fcf7e4',
    alignItems:'center'
  },
  UnderTittle:{
    marginTop:100,
    width: 300, 
    height: 300, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  image:{
    width: '100%',
    height: '100%',
  },
  register:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'flex-end',
    marginTop:120,
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

  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop:3
  },
  input: {
    marginBottom: 2,
    padding: 5,

  },
  button:{
    marginTop:40,
    marginBottom: 10, 
    borderRadius:25,
    width:180,
    height:50,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#a7a497'
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

export default RegisterScreen;
