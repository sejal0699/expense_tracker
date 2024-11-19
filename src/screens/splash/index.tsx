import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { styles } from './styles';
import { ScreenNames } from '../../navigation/screenNames';
import { Icons } from '../../assets';

interface Props {
  navigation: any,
  isFirstLaunch: boolean
}
const SplashScreen = ({ navigation, isFirstLaunch }: Props) => {
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
      Animated.timing(logoOpacity, {
        toValue: 1,
        duration: 1500,
        useNativeDriver: true,
      }),
    ]).start();

    setTimeout(() => {
      console.log(isFirstLaunch);
      if (isFirstLaunch) {
        navigation.replace(ScreenNames.Splash);
      } else {

        navigation.replace(ScreenNames.bottomTab);
      }
    }, 2000);
  }, [isFirstLaunch, navigation]);

  return (
    <View style={styles.container}>
    <Animated.Image
      source={Icons.expense}
      style={[styles.logo, { transform: [{ scale: logoScale }], opacity: logoOpacity }]}
    />
  </View>
  );
};



export default SplashScreen;
