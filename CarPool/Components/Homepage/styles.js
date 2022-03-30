import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    homecontainer: {
        width: '100%',
        height: '100%',
      },
      titles: {
        width: '100%',
        alignItems: 'center',
      },
      title: {
        fontSize: 40,
        fontWeight: '600',
      },
      subtitle: {
        fontSize: 16,
        color: '#777',
      },
      input: {
        borderWidth: 1,
        borderColor: '#777',
        padding: 8,
        margin: 10,
        width: '85%',
        alignSelf: 'center',
        color: '#DDD',
      },
      image: {
        width: 250,
        height: 250,
        resizeMode: 'contain',
        alignSelf: 'center',
      },
      ortitle: {
        marginTop: '1%',
        marginBottom: '1%',
        fontSize: 15,
        fontWeight: '600',
        alignSelf: 'center',
        color: 'white',
      },
      buttonsContainer: {
        bottom: -20,
        width: '100%',
      },
});

export default styles;