/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';



const RegisterScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmarPasswd, setConfirmarPasswd] = useState('');
  const [error, setError] = useState('');
  const [mail, setMail] = useState('');
  const navigation = useNavigation();


  const handleRegister = () => {
    // Aquí puedes implementar la lógica para iniciar sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Confirmar Contraseña', ConfirmarPasswd)
  };

  const validacion = (text: string) => {
    // Actualizar el estado del confirmar password
    setConfirmarPasswd(text);
    
    // Realizar la validación
    if (text !== password) {
      setError('Las contraseñas no coinciden');
    } else {
      setError('');
    }
  };

  const validacionpasswd = (text: string) => {
    // Actualizar el estado del confirmar password
    setPassword(text);
    
    // Realizar la validación
    if (text !== ConfirmarPasswd) {
      setError('Las contraseñas no coinciden');
    } else {
      setError('');
    }
  };
  
  const validacionCorreo = () => {

  }

  const back = () => {
    navigation.navigate('Login' as never);
  }

  return (
    <View style={styles.container}>
        {/*Botón back */}
        <View style={styles.container_back}>
        <TouchableOpacity onPress={back} style={[styles.backButton]}>
        <FontAwesomeIcon icon={faAngleLeft} style={styles.back}/>
        </TouchableOpacity>
        {/*Imagen  */}
        </View>
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
          placeholderTextColor={'black'}

        />
      </View>

      {/*Esto es el input de contraseña */}
      <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faLock} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          onChangeText={validacionpasswd}
          secureTextEntry
          value={password}
          placeholderTextColor={'black'}

        />
      </View>

      {/*Esto es el input de confirmar contraseña */}
      <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faLock} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          onChangeText={validacion}
          secureTextEntry
          value={ConfirmarPasswd}
          placeholderTextColor={'black'}

        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      
      {/*Esto es el input de introducir un correo */}
      <View style={styles.inputContainer}>
      <FontAwesomeIcon icon={faEnvelope} style={styles.icon}/>
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          onChangeText={setMail}
          value={mail}
          placeholderTextColor={'black'}

        />
      </View>

      {/*register Button*/}
      <TouchableOpacity onPress={handleRegister} style={[styles.button]}>
        <Text style={styles.buttonText}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    backButton:{
        marginTop:20,
        marginLeft:15,
        borderRadius:25,
        width:30,
        height:15,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#f8f1de'
    },
    container_back:{
        marginTop:30,
        justifyContent:'flex-start',
        width:'100%',
    },
    back:{
        marginLeft:20,
        height: 50,
        padding:10,
        resizeMode:'stretch',
    },
    error: {
        color: 'red',
      },
  container: {
    flex: 1,
    backgroundColor:'#f8f1de',
    alignItems:'center'
  },
  UnderTittle:{
    marginTop:40,
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
  },
  input: {
    marginBottom: 2,
    padding: 5,
    color:'black'
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
