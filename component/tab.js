/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import InfoScreen from '../screens/InfoScreen';
import { StyleSheet, Text } from 'react-native';

// Importa los iconos que necesites usar
import { faHome, faUser, faBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View } from 'react-native-animatable';


const Tab = createBottomTabNavigator();


const Tabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="EcoIdentify"
            screenOptions={{
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#9d9a8f',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                },
                tabBarShowLabel: false,

            }}

        >

            <Tab.Screen name="Info" component={InfoScreen} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconColor = focused ? '#193FC2' : '#030302'; // Color del icono basado en si está enfocado o no

                    return (
                        <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            <FontAwesomeIcon icon={faBook} size={25} color={iconColor} />
                            <Text style={{ color: iconColor, fontSize: 12 }}>DOCUMENTS</Text>
                        </View>
                    );
                },
            }} />


            <Tab.Screen
            
                name="EcoIdentify"
                component={HomeScreen }
                options={{
                    headerStyle: {
                        backgroundColor: '#fcf7e4', // Cambia el color del header aquí
                    },
                    headerTintColor: '#000000', // Cambia el color del texto del header si es necesario
                    tabBarIcon: ({ focused }) => {
                        let iconColor = focused ? '#193FC2' : '#030302'; // Color del icono basado en si está enfocado o no

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                            
                                <FontAwesomeIcon icon={faHome} size={25} color={iconColor} />
                                <Text style={{ color: iconColor, fontSize: 12 }}>HOME</Text>
                            </View>
                        );
                    },
                }}
            />


            <Tab.Screen name="Profile" component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => {
                        let iconColor = focused ? '#193FC2' : '#030302'; // Color del icono basado en si está enfocado o no

                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
                                <FontAwesomeIcon icon={faUser} size={25} color={iconColor} />
                                <Text style={{ color: iconColor, fontSize: 12 }}>PROFILE</Text>
                            </View>
                        );
                    },
                }}/>



        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});

export default Tabs;
