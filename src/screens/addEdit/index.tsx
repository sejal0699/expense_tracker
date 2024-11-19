import React, {useState} from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Text,
  FlatList,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {addExpense, editExpense} from '../../redux/slices/expensesSlice';
import uuid from 'react-native-uuid';
import Header from '../../components/Header';
import {Icons} from '../../assets';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { styles } from './styles';

const AddEditScreen = ({navigation}) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [DropdownVisible, setDropdownVisible] = useState(false);
  const [expenseoptions, setExpenseOptions] = useState('');
  const dispatch = useDispatch();

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const formattedDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;
    setDate(formattedDate);
    setDatePickerVisibility(false);
  };

  const handleSave = () => {
    dispatch(addExpense({id: uuid.v4(), amount, category, date,expenseoptions}));
    navigation.goBack();
  };

  const handleEdit = () => {
    dispatch(editExpense({id: uuid.v4(), amount, category}));
    navigation.goBack();
  };

  const handleGenderSelect = selectedGender => {
    setExpenseOptions(selectedGender);
    setDropdownVisible(false);
  };
  const expenseOptions = [
    {label: 'Food', value: 'Food'},
    {label: 'Travel', value: 'Travel'},
    {label: 'Shopping', value: 'Shopping'},
    {label: 'Subscription', value: 'Subscription'},
    {label: 'Others', value: 'Others'},
  ];

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Amount"
          style={styles.input}
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <TouchableOpacity
          style={styles.dropdownContainer}
          onPress={() => setDropdownVisible(!DropdownVisible)}>
          <TextInput
            placeholder="Category"
            style={styles.input}
            value={expenseoptions}
            onChangeText={setCategory}
          />

          <Image source={Icons.dropdown} style={styles.dropdownIcon} />
        </TouchableOpacity>
        {DropdownVisible && (
          <FlatList
            data={expenseOptions}
            keyExtractor={item => item.value}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => handleGenderSelect(item.value)}>
                <Text style={styles.modalOptionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownList}
          />
        )}

        <View style={styles.inputContainer}>
          <TextInput
            value={date}
            onChangeText={setDate}
            placeholder="(DD/MM/YYYY)"
            style={styles.inputWithoutIcon}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setDatePickerVisibility(true)}>
            <Image source={Icons.calenderIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <View
          style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSave} style={styles.button}>
            <Text style={styles.text}>Save</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleEdit} style={styles.button}>
            <Text style={styles.text}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display={'inline'}
      />
    </View>
  );
};


export default AddEditScreen;
