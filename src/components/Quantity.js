import React from 'react';
import {useQuantity} from '../services/useQuantity';
import {Text, View, TouchableOpacity} from 'react-native';
import InputSpinner from 'react-native-input-spinner';

export function Quantity({article}) {
  const [onUpdate, getQuantity] = useQuantity();
  return (
    <InputSpinner
      max={50}
      min={0}
      step={1}
      value={getQuantity(article.id)}
      rounded={false}
      showBorder={true}
      color={'#15a3cb'}
      onDecrease={(val) => onUpdate(val, article)}
      onIncrease={(val) => onUpdate(val, article)}
    />
  );
}
