import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
  productImage: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'left',
  },
  productColour: {
    fontSize: 18,
    marginBottom: 5,
    textAlign: 'left',
  },
  productPrice: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'left',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#e2e2e2',
    paddingTop: 10,
    height: '7%',
    width: '100%',
  },
  button: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e2e2e2',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  counterText: {
    fontSize: 20,
  },
});

export default styles;
