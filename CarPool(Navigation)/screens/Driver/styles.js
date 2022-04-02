import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homecontainer: {
        backgroundColor: '#213B62',
        flex: 1,
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        fontWeight: '700',
        color: '#FFF',
      },
      list: {
        width: 120,
        height: 70,
        borderWidth: 1,
        borderColor: '#999',
        color: 'white',
        padding: 8,
        borderRadius: 10,
        left: 10,
        //alignItems: 'center',
        //textAlignVertical: 'center',
        //textAlign: 'center',
      },
      personal: {
        color: 'white',
        
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: 200,
        color: '#DDD',
      },
      profileImage: {
        width: 60,
        height: 60,
        borderRadius: 60/2,
        right: 10,
        top: 5,
      },
      image: {
        bottom: 40,
        width: 250,
        height: 250,
        borderRadius: 250/2,
        alignSelf: 'center',
      },
      imageList: {
        width: 50,
        height: 50,
        left: 25,
        bottom: 20,
      },
      adjust: {
        top: 100,
      },
      buttonsContainer:{
        marginTop: 25,
        flexDirection: 'row',
      },
});

export default styles;