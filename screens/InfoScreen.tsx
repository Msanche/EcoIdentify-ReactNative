/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const InfoScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <FontAwesomeIcon icon={faCamera} size={100}/>
      </View>
      <ScrollView style={styles.content}>
        <Text style={styles.sectionTitle}>Especies que te pueden interesar</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.horizontalScroll}>
          <View style={styles.especieItem}>
            <Image source={{ uri: 'https://via.placeholder.com/65' }} style={styles.especieImage} />
          </View>
          <View style={styles.especieItem}>
            <Image source={{ uri: 'https://via.placeholder.com/65' }} style={styles.especieImage} />
          </View>
          <View style={styles.especieItem}>
            <Image source={{ uri: 'https://via.placeholder.com/65' }} style={styles.especieImage} />
          </View>
        </ScrollView>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sabías que...</Text>
          <View style={styles.sectionContainer}>
          <Text style={styles.knowledgeText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
          </Text>
          </View>
        </View>
      </ScrollView>
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
    marginTop:50,
    alignItems: 'center',
    marginVertical: 20,
    marginBottom:40,
  },
  content: {
    flex:1,
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionContainer:{
    borderColor:'black',
    borderWidth:1,
    borderRadius:15,
    paddingTop:5,
    paddingBottom:10,
    paddingLeft:3,
    paddingRight:3,
  },
  horizontalScroll: {
    marginBottom: 20,
  },
  especieItem: {
    marginRight: 40,
  },
  especieImage: {
    width: 65,
    height: 65,
    borderRadius: 25,
  },
  moreButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    marginBottom: 20,
  },
  knowledgeText: {
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

export default InfoScreen;
