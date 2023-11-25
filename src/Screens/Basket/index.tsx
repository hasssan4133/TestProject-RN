import React from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Button,
  StyleSheet,
} from 'react-native';
import Text from 'src/Components/Text';
import View from 'src/Components/View';
import Image from 'src/Components/Image';
import Header from 'src/Components/Header';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToBasket, removeFromBasket} from 'src/Redux/Reducers/API/actions';
import styles from './style';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from 'src/Navigation/types';

// Define the shape of a basket item
interface BasketItem {
  id: number;
  name: string;
  colour: string;
  price: number;
  img?: string;
}

// Define the props type for this component
interface BasketProps {
  route: any;
  navigation: StackNavigationProp<RootStackParamList, 'Basket'>;
}

// The main Basket component
const Basket: React.FC<BasketProps> = ({route, navigation}) => {
  // Accessing basket items from Redux state
  const basketItems: BasketItem[] = useSelector(state => state.auth.basket);
  const dispatch = useDispatch();

  // Handler function to add more of an item to the basket
  const handleAddMore = (item: BasketItem) => {
    dispatch(addToBasket(item));
  };

  // Handler function to remove an item from the basket by ID
  const handleRemoveItem = (itemId: number) => {
    dispatch(removeFromBasket(itemId));
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header component with back button and basket item count */}
      <Header
        headerText={false}
        backButtonAction={() => navigation.goBack()}
        basketCount={basketItems?.length || 0}
      />
      {/* List of items in the basket */}
      <FlatList
        data={basketItems}
        keyExtractor={(item: BasketItem) => item.id.toString()}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.itemContainer}>
            {/* Displaying item image */}
            <Image
              source={{
                uri: item.img,
              }}
              style={styles.itemImage}
            />
            <View style={styles.itemTextContainer}>
              {/* Displaying item details */}
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemInfo}>Colour: {item.colour}</Text>
              <View>
                <Text style={styles.itemInfo}>Price: ${item.price}</Text>
              </View>
              {/* Remove item button */}
              <Button
                title="Remove"
                onPress={() => handleRemoveItem(item.id)}
              />
              {/* Add more of the same item button */}
              <Button title="Add More" onPress={() => handleAddMore(item)} />
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default Basket;
