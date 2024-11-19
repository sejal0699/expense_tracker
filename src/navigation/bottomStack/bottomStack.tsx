import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, TouchableOpacity } from 'react-native';
import { ScreenNames } from '../screenNames';
import { Icons } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import Home from '../../screens/home';
import Transaction from '../../screens/transaction';
import Budget from '../../screens/budget';
import Profile from '../../screens/profile';

const Tab = createBottomTabNavigator();

function BottomStack() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: "#7F3DFF",
                tabBarLabelStyle: { fontSize: 12 }, 
            }}
        >
            <Tab.Screen 
                name={ScreenNames.Home} 
                component={Home} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.homeIcon}
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? "#7F3DFF" : undefined,
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name={ScreenNames.Transaction}
                component={Transaction}
                options={{
                    tabBarIcon: ({ focused }) => {
                        const navigation = useNavigation();
                        return (
                            <TouchableOpacity
                               
                            >
                                <Image
                                    source={Icons.transactionIcon}
                                    style={{
                                        width: 25, 
                                        height: 25,
                                        tintColor: focused ? "#7F3DFF" : undefined, 
                                    }}
                                />
                            </TouchableOpacity>
                        );
                    },
                }}
            />

            <Tab.Screen 
                name={ScreenNames.Budget} 
                component={Budget}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.budgetIcon}
                            style={{
                                width: 25, 
                                height: 25,
                                tintColor: focused ? "#7F3DFF" : undefined, 
                            }}
                        />
                    ),
                }}
            />

            <Tab.Screen 
                name={ScreenNames.Profile} 
                component={Profile}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image
                            source={Icons.profileIcon}
                            style={{
                                width: 20, 
                                height: 20,
                                tintColor: focused ? "#7F3DFF" : undefined,
                            }}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

export default BottomStack;
