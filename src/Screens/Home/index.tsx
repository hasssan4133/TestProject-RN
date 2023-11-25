import React, {useState, useEffect} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import {THomeScreen} from 'src/Navigation/types';
import styles from './style';
import Image from 'src/Components/Image';
import {useNavigation} from '@react-navigation/native';
import Header from 'src/Components/Header';
import {getDetails} from 'src/Redux/Reducers/API/actions';
import {useSelector} from 'react-redux';
import {StateType} from 'src/Redux/Reducers/API/reducers'; // Assuming you have StateType exported in the reducers file

// Define the shape of an item
interface Item {
  id: string;
  name: string;
  info: string;
  imageUrl: string;
  colour?: string;
  price?: number;
}

const Home: React.FC<THomeScreen<'Home'>> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  // Hook for react navigation
  const nav = useNavigation();

  // Extracting basket items and other details from Redux state
  const basketItems: Item[] = useSelector(
    (state: StateType) => state.auth.basket,
  );
  const shopData: Item[] = useSelector((state: StateType) => state.auth.data);
  const counterValue = useSelector((state: StateType) => state.auth.counter);

  // Fetch the details when the component is mounted
  useEffect(() => {
    getDetails(({success}) => {
      if (success) {
        setIsLoading(false);
      }
    });
  }, []);

  // Handle clicking on an item to navigate to the details page
  const handleItemClick = (item: Item) => {
    nav.navigate('Detail', {item});
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header component with basket item count */}
      <Header
        headerText={true}
        backButtonAction={() => nav.navigate('Basket')}
        basketCount={basketItems.length}
      />

      {/* Loading indicator */}
      {isLoading ? (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <Text>Loading...</Text>
        </View>
      ) : (
        // Render the list of items if not loading
        <FlatList
          data={shopData}
          renderItem={({item}) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => handleItemClick(item)}>
              <Image
                source={{
                  uri: item?.img,
                }}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemInfo}>Colour: {item.colour}</Text>
                <Text style={styles.itemInfo}>
                  Price: ${item.price?.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      )}
    </SafeAreaView>
  );
};

export default Home;
