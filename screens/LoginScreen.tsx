/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import WebService from '../WebService';
import axios from 'axios';



const LoginScreen = ({}) => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [loginStatus,setLoginStatus] = useState('');
  const [error, setError] = useState('');


  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
        // Obtener los productos/materiales recientes desde el servicio web
        const response = await axios.get(`http://${WebService.host}:${WebService.port}/usuarios`);
        console.log(response.data); // Añade esto para ver la respuesta del servidor
        const usersList = response.data.map((item: { nombre: any; contrasena: any;}) => ({
          user: item.nombre, // Asegúrate de que esto coincide con la propiedad del nombre de usuario
          contrasena: item.contrasena, // Asegúrate de que esto coincide con la propiedad de la contraseña
        }));
        
        const foundUserPass = usersList.find((u: { contrasena: string; }) => u.contrasena === password);
        const foundUser = usersList.find((u: { user: string; }) => u.user === username);



        if (foundUser) {
          if (foundUser.user === username) {
            if(foundUserPass.contrasena === password){
              console.log(foundUser.user);
              console.log(username);
              setLoginStatus('Login Successful');
              console.log("Login Successful");
              setError('');

              navigation.navigate('Tabs' as never);

            }
          } else {
            setLoginStatus('Incorrect User or Password');
          }
        } else {
          setLoginStatus('User Not Found');
        }

    } catch (errores) {
        console.log("Usuario o contrasena incorecto");
        setError('Usuario o contraseña incorrecto');
        setLoginStatus('');

    }
};


  const handleRegister = () => {
    // Aquí puedes implementar la lógica para el registro
    navigation.navigate('Register' as never);

    console.log('Registro de nuevo usuario');
  };



  return (
    <View style={styles.container}>
      <View style={styles.UnderTittle}>
        <Image source={require('../src/images/UnderTittle.jpg')} style={styles.imageTittle}/>
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
          onChangeText={setPassword}
          secureTextEntry
          value={password}
          placeholderTextColor={'black'}
        />
      </View>


      {error ? <Text style={styles.error}>{error}</Text> : null}
      {loginStatus ? <Text style={styles.status}>{loginStatus}</Text> : null}

      {/*Login Button*/}
      <TouchableOpacity onPress={handleLogin} style={[styles.button]}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      {/*Register Text */}
      <View style={styles.register}>
        <Text style={styles.text2}>No tienes una cuenta?  </Text>
        <TouchableOpacity onPress={handleRegister}>

          <Text style={styles.text}>Crear</Text>
        </TouchableOpacity>
      </View>


    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
  status: {
    color: 'green',
  },
  container: {
    flex: 1,
    backgroundColor:'#fcf7e4',
    alignItems:'center',
  },
  UnderTittle:{
    marginTop:100,
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTittle:{
    width:'100%',
    height:'100%',
  },
  image:{
    padding:10,
    marginLeft:10,
    width: 25,
    height: 25,
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
    marginTop:3,
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
    backgroundColor:'#a7a497',
  },
  icon: {
    marginLeft: 10,
    width: 24,
    height: 24,
    padding:10,
    resizeMode:'stretch',
    alignItems:'center',
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
