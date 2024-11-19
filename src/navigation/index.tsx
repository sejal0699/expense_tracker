import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddEditScreen from '../screens/addEdit';
import InsightsScreen from '../screens/insights';
import { ScreenNames } from './screenNames';
import SplashScreen from '../screens/splash';
import BottomStack from './bottomStack/bottomStack';


const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name={ScreenNames.Splash}
          options={{ headerShown: false }}
          component={SplashScreen}
          >
            
        </Stack.Screen>
        <Stack.Screen
          name={ScreenNames.bottomTab}
          component={BottomStack}
          options={{ headerShown: false }}
        />

        <Stack.Screen 
        name={ScreenNames.AddEdit}
        component={AddEditScreen}
        options={{ headerShown: false }}
        />

       <Stack.Screen 
        name={ScreenNames.Insights}
        component={InsightsScreen}
        options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator