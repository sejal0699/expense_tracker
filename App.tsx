
import React, { useEffect } from 'react';
import RootNavigator from './src/navigation';
import { Provider } from 'react-redux';
import store from './src/redux/store';

const App = () => {
  // useEffect(() => {
  //   SplashScreen.hide();
  // }, []);
  return (
    <Provider store={store}>
    <RootNavigator />
    </Provider>
  );
};

export default App;
