import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import Riderpage from './components/Riderpage';

const App = () => {
  return(
    <View style = {styles.container}>
      
      {/*<Homepage />*/}
      {/*<Mainpage />*/}
      {/*<Profilepage />*/}
      {/*<Driverpage />*/}
      <Riderpage />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#213B62',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
});

export default App;