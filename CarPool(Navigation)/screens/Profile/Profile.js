import React, {useState} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';
import LongButton from '../LongButton';

const Profilepage = ({navigation}) => {

    const [name, setName] = useState('Name Here');

  return(
    <View style = {styles.homecontainer}>
      
          <Text style={styles.title}>Profile</Text>
        <Image style={styles.image} source={require('../../assets/Profile.png')} />
          <Text style = {styles.title}>[{name}]</Text>
        
      <View style={styles.container}>
          <TextInput style={styles.input} 
            placeholderTextColor='white' 
            placeholder='Enter Name'
            onChangeText={(val) => setName(val)} 
        />
        <TextInput style={styles.input} 
            placeholderTextColor='white' 
            placeholder='Enter City' 
        />
        <TextInput style={styles.input}
            placeholderTextColor='white' 
            placeholder='Enter Driver License (optional if riding)' 
        />
        <LongButton 
            type="primary" 
            content={"Update"} 
            onPress={() => {
            console.warn("Update button was pressed");
            }}
        />
        <LongButton 
            type="secondary" 
            content={"Logout"} 
            onPress={() => 
              navigation.navigate('Home')}
        />
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

export default Profilepage;