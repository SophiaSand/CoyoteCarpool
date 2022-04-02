import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import LongButton from '../LongButton';
import SmallButton from '../SmallButton';

const Riderpage = ({navigation}) => {
  
  return(
    <View style = {styles.homecontainer}>
      <Text style = {styles.title}>Riders Near You</Text>
      <View style = {styles.buttonsContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Profile.png')}/>
            <View style={styles.list}>
                <Text style={styles.personal}>Nathan Kelly</Text>
                <Text style={styles.personal}>0 miles</Text>
            </View>
            <SmallButton 
                type="primary" 
                content={"Contact"} 
                onPress={() => {
                console.warn("Contact button was pressed");
                }}
            />
      </View>
      <View style = {styles.buttonsContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Profile.png')}/>
            <View style={styles.list}>
                <Text style={styles.personal}>Ivan Lopez</Text>
                <Text style={styles.personal}>5 miles</Text>
            </View>
            <SmallButton 
                type="primary" 
                content={"Contact"} 
                onPress={() => {
                console.warn("Contact button was pressed");
                }}
            />
      </View>
      <View style = {styles.buttonsContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Profile.png')}/>
            <View style={styles.list}>
                <Text style={styles.personal}>David Vallejo</Text>
                <Text style={styles.personal}>20 miles</Text>
            </View>
            <SmallButton 
                type="primary" 
                content={"Contact"} 
                onPress={() => {
                console.warn("Contact button was pressed");
                }}
            />
      </View>
      <View style = {styles.buttonsContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Profile.png')}/>
            <View style={styles.list}>
                <Text style={styles.personal}>Sophia Sandoval</Text>
                <Text style={styles.personal}>30 miles</Text>
            </View>
            <SmallButton 
                type="primary" 
                content={"Contact"} 
                onPress={() => {
                console.warn("Contact button was pressed");
                }}
            />
      </View>
      <View style = {styles.buttonsContainer}>
        <Image style={styles.profileImage} source={require('../../assets/Profile.png')}/>
            <View style={styles.list}>
                <Text style={styles.personal}>Isai Ramirez Lopez</Text>
                <Text style={styles.personal}>35 miles</Text>
            </View>
            <SmallButton 
                type="primary" 
                content={"Contact"} 
                onPress={() => {
                console.warn("Contact button was pressed");
                }}
            />
      </View>
      <View style={styles.buttonsContainer}>
        <LongButton 
          type="secondary" 
          content={"Home Page"} 
          onPress={() => 
            navigation.navigate('Main')}
        />
      </View>
      
    </View>
  )
}

export default Riderpage;