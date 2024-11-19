import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EEE5FF', 
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      marginTop: 20,
    },
    expenseCard: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 15,
      marginBottom: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    cardHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    category: {
      fontSize: 18,
      fontWeight: '600',
      color: '#333',
    },
    amount: {
      fontSize: 18,
      fontWeight: '500',
      color: '#7F3DFF',
    },
    birthday: {
      fontSize: 14,
      color: '#666',
      marginBottom: 10,
    },
    deleteButton: {
      paddingVertical: 8,
      paddingHorizontal: 16,
      backgroundColor: '#FF4B5C',
      borderRadius: 6,
      alignItems: 'center',
    },
    deleteText: {
      color: 'white',
      fontWeight: '500',
    },
    footer: {
      position: 'absolute',
      bottom: 30,
      left: 0,
      right: 0,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      paddingHorizontal: 20,
    },
    footerButton: {
      backgroundColor: '#7F3DFF',
      paddingVertical: 12,
      paddingHorizontal: 25,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    footerButtonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
    },
  });