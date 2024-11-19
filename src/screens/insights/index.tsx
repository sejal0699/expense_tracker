import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { PieChart } from 'react-native-gifted-charts';
import Header from '../../components/Header';
import { styles } from './styles';

const screenWidth = Dimensions.get('window').width;

const InsightsScreen = () => {
  const expenses = useSelector(state => state.expenses);
  console.log('Expenses:', expenses);
  const[total,setTotal]=useState('')


  const totalExpense = [];

  expenses.forEach(expense => {
    const existingCategory = totalExpense.find(item => item.category === expense.category);
    if (existingCategory) {
      existingCategory.amount += parseFloat(expense.amount);
      setTotal(existingCategory);
    } else {
      totalExpense.push({ category: expense.category, amount: parseFloat(expense.amount) });
    }
  });

  const chartData = totalExpense.map(item => ({
   
    value: item.amount,
    color: '#7F3DFF',  
    text: item.expenseoptions,  
  }));

  return (
    <View style={styles.container}>
      <Header />
      
      <Text style={styles.text}>Financial Report</Text>
      
      <View style={styles.charts}>
        {chartData.length > 0 ? (
          <PieChart
            data={chartData}
            donut={true} 
            showText={true}
            textColor="black"
            centerLabelComponent={() => (
              <Text style={styles.centerLabel}>
                Total Expenses: ${chartData.reduce((sum, item) => sum + item.value, 0).toFixed(2)}
              </Text>
            )}
            radius={screenWidth / 4}
          />
        
        ) : (
          <Text style={styles.noDataText}>No expenses to display!</Text>
        )}
         
      </View>
    </View>
  );
};

export default InsightsScreen;
