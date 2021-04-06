import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import ArticlesContext from '../store/store';
import TouchableItem from '@react-navigation/stack/src/views/TouchableItem';

export default function Footer({navigation, onClick, ...props}) {
  const {panier, articles} = useContext(ArticlesContext);

  let totalPrixPanier = 0;
  let totalArticlesPanier = 0;

  if (articles.length !== 0) {
    Object.keys(panier).forEach((key) => {
      let article = articles.find((element) => element.id == key);
      totalPrixPanier += article.prix * panier[key].quantity;
      totalArticlesPanier += panier[key].quantity;
    });
  }

  return (
    <TouchableItem onPress={() => onClick()}>
      <View style={{borderTopColor: 'black', borderTopWidth: 2, padding: 10}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold'}}>Panier</Text>
        <Text>Prix total : {totalPrixPanier}€</Text>
        <Text>Total articles : {totalArticlesPanier}</Text>
      </View>
    </TouchableItem>
  );
}
