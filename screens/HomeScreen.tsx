/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

interface PublicationProps {
  content: string;
  onClick: () => void;
}

const Publication: React.FC<PublicationProps> = ({ content, onClick }) => {
  return (
    <TouchableOpacity style={styles.publication} onPress={onClick}>
      <Text>{content}</Text>
    </TouchableOpacity>
  );
};

const PublicationsScreen: React.FC = () => {
  const publications = [
    'Publicación 1',
    'Publicación 2',
    'Publicación 3',
    // Agrega más publicaciones aquí
  ];

  const handleAddClick = () => {
    // Lógica para agregar una nueva publicación
    console.log('Agregar nueva publicación');
  };

  const handlePublicationClick = (index: number) => {
    // Lógica para ver una publicación ampliada
    console.log(`Ver publicación ${index}`);
  };

  return (
    <View style={styles.screenContainer}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {publications.map((content, index) => (
          <Publication
            key={index}
            content={content}
            onClick={() => handlePublicationClick(index)}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton} onPress={handleAddClick}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PublicationsScreen;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    position: 'relative',
    backgroundColor:'#fcf7e4',
  },
  scrollViewContent: {
    alignItems: 'center',
    paddingBottom: 80, // Espacio para el botón flotante
  },
  publication: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
  },
  floatingButton: {
    position: 'absolute',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#9d9a8f',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 20,
    right: 20,
    elevation: 8, // Añade sombra para Android
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    marginBottom:110,
  },
  floatingButtonText: {
    color: '#fff',
    fontSize: 36,
    lineHeight: 36,
  },
});
