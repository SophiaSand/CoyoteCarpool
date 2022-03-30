import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homecontainer: {
        flex: 1,
        alignItems: 'center',
      },
      subtitle: {
        bottom: 25,
        fontSize: 16,
        color: '#FFF',
      },
      question: {
        top: 15,
        fontSize: 16,
        color: '#FFF',
      },
      list: {
        width: 125,
        borderWidth: 3,
        borderColor: '#096DC6',
        color: '#FFF',
        padding: 8,
        borderRadius: 10,
        right: 45,
        textAlignVertical: 'center',
        textAlign: 'center',
        bottom: 20,
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
        width: 50,
        height: 50,
        borderRadius: 50/2,
        top: 10,
        left: 150,
      },
      image: {
        bottom: 40,
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      imageList: {
        width: 50,
        height: 50,
        left: 25,
        bottom: 20,
      },
      buttonsContainer:{
        marginTop: 25,
        flexDirection: 'row',
      },
});

export default styles;