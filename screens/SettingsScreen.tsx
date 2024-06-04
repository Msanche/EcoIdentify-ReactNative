/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.optionsContainer}>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cambiar Correo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionText}>Cambiar Contraseña</Text>
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
  optionsContainer: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  optionButton: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#a7a497',
    borderRadius: 5,
  },
  optionText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SettingsScreen;
