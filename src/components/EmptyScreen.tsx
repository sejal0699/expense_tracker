import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Images } from "../assets";

const EmptyScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image source={Images.homePageImage} style={styles.image}/>
        <Text style={styles.text}>Know where your money goes</Text>
        <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Track your transaction easily,
            with categories and financial report </Text>
          </TouchableOpacity> 
          </View>
        </View>
      </View>
    
    </View>
  );
};

export default EmptyScreen;

const styles = StyleSheet.create({
  buttonText: {
    color:"#91919F",
    textAlign:'center'
  },
  image:{
    alignSelf:'center',
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  container:{
   alignSelf:'center'
  },
  text:{
fontWeight:'bold',
alignSelf:'center',
fontSize:24
  },
  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
    marginTop:20
  },
  loginButton: {
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "green",
  },

});
