import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {flex: 1,
      backgroundColor:'#EEE5FF'
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginBottom: 10,
      borderRadius: 10,
      margin: 10,
    },
    inputWithoutIcon: {
      flex: 1,
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      borderRadius: 10,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
      margin: 10,
    },
    iconWrapper: {
      padding: 8,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#ccc',
    },
    icon: {
      width: 20,
      height: 20,
    },
    cartIcon: {
      flexDirection: 'row',
      top: 30,
      marginRight: 16,
      alignSelf: 'flex-end',
      padding: 8,
      borderRadius: 8,
      gap: 10,
    },
    button: {
      padding: 18,
      backgroundColor: '#7F3DFF',
      borderRadius: 10,
    },
    text: {
      color: 'white',
    },
    dropdownContainer: {
      position: 'relative',
      marginTop: 10,
    },
    dropdownIcon: {
      width: 12,
      height: 10,
      position: 'absolute',
      right: 20,
      top: 25,
    
    },
    modalOptionText: {
      fontSize: 16,
      padding: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    dropdownList: {
      position: 'absolute',
      backgroundColor: 'white',
  
      width: '90%',
      zIndex: 1,
      alignSelf:'center',
      top:'50%',
      borderRadius:10
    },
    buttonContainer:{
     
            justifyContent: 'flex-end',
            alignSelf: 'center',
            alignContent: 'flex-end',
            alignItems: 'flex-end',
            flexDirection: 'row',
            bottom: 0,
            gap: 10,
            top: 60,
          
          
    },
    textContainer:{
        top: '20%'
    }
  });
  