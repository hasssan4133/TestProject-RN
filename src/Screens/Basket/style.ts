import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    marginVertical: 8,
    backgroundColor: 'white',
    borderRadius: 8,
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {height: 2, width: 0},
    elevation: 2, // Android
  },
  itemTextContainer: {
    marginLeft: 10, // Add some spacing between the image and text
    flex: 1, // This will make the text container take the remaining width
    justifyContent: 'flex-start',
  },
  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    resizeMode: 'contain',
  },
  itemName: {
    fontSize: 18,
    fontWeight: '600',
  },
  itemInfo: {
    fontSize: 14,
    color: '#555',
  },
});
export default styles;
