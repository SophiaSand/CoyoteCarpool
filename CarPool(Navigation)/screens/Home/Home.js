import React from 'react'
import {View, Button, Text, Image} from 'react-native'
import styles from './styles'
import LongButton from '../LongButton/index';

const Home = ({ navigation }) => {
  return(
    <View style = {styles.homecontainer}>

      <Image style={styles.image} source={require('../../assets/Logo.png')} />

      <View style = {styles.titles}>
        <Text style = {styles.title}>Coyote Carpool</Text>
        <Text style = {styles.subtitle}>Only for CSUSB students</Text>
      </View>
    
      <View style={styles.buttonsContainer}>
        <LongButton 
          type="primary" 
          content={"Sign In with Google"} 
          onPress={() => 
            navigation.navigate('Main')}
        />
        <Text style={styles.ortitle}>OR</Text>
        <LongButton 
          type="secondary" 
          content={"Sign Up with Google"} 
          onPress={() => 
            navigation.navigate('Main')}
        />
        
      </View>
    </View>
  )
}

export default Home