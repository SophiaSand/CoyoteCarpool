import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homecontainer: {
        marginTop: 50,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        color: 'white',
        fontWeight: '600',
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        borderRadius: 10,
        padding: 8,
        margin: 10,
        width: '85%',
        alignSelf: 'center',
        color: '#DDD',
      },
      image: {
        width: 150,
        height: 150,
        borderRadius: 150/2,
        alignSelf: 'center',
      },
      container: {
        marginTop: 20,
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
});

export default styles;