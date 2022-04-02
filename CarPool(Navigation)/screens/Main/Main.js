import React, {useState} from 'react';
import {View, Text, TextInput, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const Mainpage = ({navigation}) => {
  
  return(
    <View style = {styles.homecontainer}>
      <TouchableOpacity onPress={()=> navigation.navigate('Profile')}>
        <Image source={require('../../assets/Profile.png')} style={styles.profileImage}/>
      </TouchableOpacity>
      
      <Image style={styles.image} source={require('../../assets/Logo.png')} />

      <Text style = {styles.subtitle}>Why Coyote Carpool?</Text>
      
      <View style = {styles.buttonsContainer}>
        <Text style={styles.list}>Convenient</Text>
        <Image style={styles.imageList} source={require('../../assets/MapLogo.png')}/>        
      </View>
      <View style = {styles.buttonsContainer}>
        <Text style={styles.list}>Save Gas</Text>
        <Image style={styles.imageList} source={require('../../assets/Gas.png')}/>
      </View>
      <View style = {styles.buttonsContainer}>
        <Text style={styles.list}>Make Friends</Text>
        <Image style={styles.imageList} source={require('../../assets/Friends.jpg')}/>
      </View>


      <Text style = {styles.question}>Would You Like to Drive or Ride?</Text>

      <View style={styles.buttonsContainer}>
        <StyledButton 
          type="primary" 
          content={"Drive"} 
          onPress={() => navigation.navigate('Driver')}
        />
        <StyledButton 
          type="secondary" 
          content={"Ride"} 
          onPress={() => navigation.navigate('Rider')}
        />
      </View>
      
    </View>
  )
}

export default Mainpage;