import React, {useState} from 'react';
import {SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
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

// Define the shape of a product/item
interface ProductItem {
  id: number;
  name: string;
  colour: string;
  price: number;
  img?: string;
}

// Define the props type for this component
interface DetailProps {
  route: {
    params: {
      item: ProductItem;
    };
  };
  navigation: StackNavigationProp<RootStackParamList, 'Detail'>;
}

const Detail: React.FC<DetailProps> = ({route}) => {
  // Extracting item from route params
  const {item} = route.params;

  // Hooks for navigation and Redux dispatch
  const nav = useNavigation();
  const dispatch = useDispatch();

  // Accessing basket items from Redux state
  const basketItems: ProductItem[] = useSelector(state => state.auth.basket);

  // Handler function to add an item to the basket
  const handleAddToBasket = () => {
    dispatch(addToBasket(item));
  };

  // Handler function to remove an item from the basket by ID
  const handleRemoveFromBasket = () => {
    dispatch(removeFromBasket(item.id));
  };

  return (
    <View style={styles.container}>
      {/* Header component with back button and basket item count */}
      <Header
        headerText={false}
        backButtonAction={() => nav.goBack()}
        basketCount={basketItems?.length || 0}
      />

      {/* Product image */}
      <Image
        source={{
          uri: item?.img,
        }}
        style={styles.productImage}
      />

      {/* Product details */}
      <View style={styles.textContainer}>
        <Text style={styles.productName}>{item?.name}</Text>
        <Text style={styles.productColour}>Colour: {item?.colour}</Text>
        <Text style={styles.productPrice}>
          Price: ${item?.price.toFixed(2)}
        </Text>
      </View>

      {/* Counter control for adding/removing items from basket */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleRemoveFromBasket()}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{basketItems.length}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleAddToBasket()}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Detail;
