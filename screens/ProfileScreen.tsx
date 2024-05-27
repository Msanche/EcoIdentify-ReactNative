/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCirclePlus, faGear, faImage, faPen, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';



const ProfileScreen: React.FC = () => {

  const navigation = useNavigation();

const handlerSettings = () => {
  // Aquí puedes implementar la lógica para el registro
  navigation.navigate('Settings' as never);

  console.log('Settings Screen');
};
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity style={styles.settingsIcon} onPress={handlerSettings} >
          <FontAwesomeIcon icon={faGear} style={styles.settingsIcon} size={25}/>
          </TouchableOpacity>
      </View>
      <View style={styles.profileSection}>
        <Image source={{ uri: 'https://via.placeholder.com/140' }} style={styles.profileImage} />
        <TouchableOpacity>
        <FontAwesomeIcon icon={faPen} style={styles.penicon} size={25}/>
        </TouchableOpacity>

        <Text>Nombre</Text>
        <TouchableOpacity>
          <Text style={styles.editText}>Editar Usuario</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menu}>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Publicaciones</Text>
          <FontAwesomeIcon icon={faCirclePlus} size={20}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Amigos</Text>
          <FontAwesomeIcon icon={faUser} size={20}/>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
          <Text style={styles.menuText}>Fotografías</Text>
          <FontAwesomeIcon icon={faImage} size={20}/>
        </TouchableOpacity>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf7e4',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  settingsIcon: {
    marginTop:10,
    marginRight: 10,
  },
  profileSection: {
    alignItems: 'center',
    marginVertical: 20,
    width: 190,
    height: 190,
    borderRadius: 50,
    alignContent:'center',
    alignSelf:'center',
    marginBottom:50,
  },
  penicon:{
    marginLeft:130,
    marginBottom:30,
  },
  profileImage: {
    width: 140,
    height: 140,
    borderRadius: 50,
  },
  editText: {
    color: '#007BFF',
    marginTop: 10,

  },
  menu: {
    flex: 1,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default ProfileScreen;

