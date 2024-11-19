import React, { useContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContext } from '@react-navigation/native';
import { Icons } from '../assets';
import { colors } from '../themes';


const Header = () => {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <View style={styles.headerText}>
            <View style={styles.text}>
            <Image source={Icons.avatarIcon} />
            </View>
          </View>
        </View>
          <View style={styles.cartIcon}>
          <Image source={Icons.notificationIcon}/>
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "FFF6E5",
    margin:10
  },
 
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    height: 110,

  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  headerText: {
    flexDirection: 'row',
    marginLeft: 10,
    top:6
  },
  text: {
    flexDirection: 'column',
  },
  location: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop:15,
    marginLeft:10
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.white,
    marginTop: 4,
    marginLeft:10
  },
  cartIcon: {
    flexDirection: 'row',
    top:20,
    marginRight: 16,
    // backgroundColor:'#FFFFFF1A',
    padding:8,
    borderRadius:8,
    gap:10
  },
  iconImage: {
    width: 24,
    height: 32,
    tintColor:colors.white,
    bottom:6
  },
  iconImage1:{
    width: 24,
    height: 22,
    gap:10
  }
});

export default Header;
