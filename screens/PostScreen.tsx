/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native'; // Importa useRoute
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import WebService from '../WebService';

export default function CreatePostScreen() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const navigation = useNavigation();
  
  // Obtén los datos pasados desde la pantalla anterior
 
  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        maxWidth: 1024,
        maxHeight: 1024,
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          setImage(response.assets[0].uri || null);
        }
      }
    );
  };

  const handleSubmit = async () => {

    if (title && text) {
      try {
        let imageName = null;
        if (image) {
          imageName = image.split('/').pop(); // Obtener el nombre del archivo
        }
        // Enviamos el título, el contenido y el nombre de la imagen al servidor
        await axios.post(`http://${WebService.host}:${WebService.port}/Publicaciones`, {
          titulo: title,
          contenido: text,
          imagenname: imageName,
        });
        console.log('Datos enviados exitosamente');
        // Aquí puedes navegar a otra pantalla o limpiar el formulario
      } catch (error) {
        console.error('Error al enviar los datos:', error);
      }
    } else {
      console.log('El título y el texto son obligatorios');
    }
  };

  const back = () => {
    navigation.navigate('Tabs' as never);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Text style={styles.backButtonText} onPress={back}>{'<'}</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.textArea}
        placeholder="Texto"
        value={text}
        onChangeText={setText}
        multiline
      />
      <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
        <Text style={styles.imagePickerText}>Agregar imagen</Text>
      </TouchableOpacity>
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <View style={styles.inputContainer}>
          <Text style={styles.submitButtonText}>Publicar</Text>
          <FontAwesomeIcon icon={faCheck}/>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    height: 50,
  },
  container: {
    flex: 1,
    backgroundColor: '#fcf7e4',
    padding: 16,
  },
  backButton: {
    marginBottom: 16,
  },
  backButtonText: {
    fontSize: 24,
    color: '#a7a497',
  },
  input: {
    borderWidth: 1,
    borderColor: '#a7a497',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#a7a497',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
    height: 100,
    textAlignVertical: 'top',
  },
  imagePicker: {
    backgroundColor: '#a7a497',
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 4,
  },
  imagePickerText: {
    color: '#fcf7e4',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 4,
  },
  submitButton: {
    backgroundColor: '#a7a497',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '36%',
    height: '6%',
    marginTop: 460,
    marginStart: 220,
  },
  submitButtonText: {
    color: '#fcf7e4',
    fontSize: 16,
    marginStart: 25,
    marginEnd: 10,
  },
});
