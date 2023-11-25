import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 0.5,
    borderBottomColor: '#d1d1d1',
  },
  title: {
    fontSize: width * 0.06, // Example of responsive fontSize
    fontWeight: 'bold',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center', // This aligns the image and text vertically
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    elevation: 2,
  },

  itemImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    resizeMode: 'contain',
  },

  itemTextContainer: {
    marginLeft: 10,
    flex: 1,
  },

  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    // backgroundColor: 'red',
  },

  itemInfo: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default styles;
