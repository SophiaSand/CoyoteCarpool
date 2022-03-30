import React from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import LongButton from '../LongButton';

const Homepage = (props) => {
  return(
    <View style = {styles.homecontainer}>

      <Image style={styles.image} source={require('../../assets/Logo.png')} />

      <View style = {styles.titles}>
        <Text style = {styles.title}>Coyote Carpool</Text>
        <Text style = {styles.subtitle}>Only for CSUSB students</Text>
      </View>

      <TextInput style={styles.input} 
        placeholderTextColor='white' 
        placeholder='Enter Username' 
      />
      <TextInput style={styles.input}
        placeholderTextColor='white' 
        placeholder='Enter Password' 
      />

      <View style={styles.buttonsContainer}>
        <LongButton 
          type="primary" 
          content={"Sign In with Google"} 
          onPress={() => {
          console.warn("Sign in was pressed");
          }}
        />
          <Text style = {styles.ortitle}>OR</Text>

        <LongButton 
          type="secondary" 
          content={"Sign Up with Google"} 
          onPress={() => {
          console.warn("Sign up was pressed");
          }}
        />
      </View>
      
    </View>
  )
}

export default Homepage;
