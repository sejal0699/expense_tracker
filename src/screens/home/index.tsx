import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { deleteExpense } from '../../redux/slices/expensesSlice';
import EmptyScreen from '../../components/EmptyScreen';
import Header from '../../components/Header';
import { styles } from './styles';

const Home = ({ navigation }) => {
  const expenses = useSelector(state => state.expenses);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        {expenses.length === 0 ? (
          <EmptyScreen />
        ) : (
          
          <FlatList
            data={expenses}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.expenseCard}>
             
                <View style={styles.cardHeader}>
                  <Text style={styles.category}>{item.expenseoptions}</Text>
                  <Text style={styles.amount}>${item.amount}</Text>
                </View>
                <Text style={styles.birthday}>{item.date}</Text>
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() => dispatch(deleteExpense(item.id))}
                >
                  <Text style={styles.deleteText}>Delete</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('AddEdit')} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>Add/Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Insights',expenses)} style={styles.footerButton}>
          <Text style={styles.footerButtonText}>View Insights</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};



export default Home;
