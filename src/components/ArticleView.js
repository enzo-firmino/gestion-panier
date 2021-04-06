import React, {useState} from 'react';
import {Text, View} from 'react-native';
import ArticleList from './ArticleList';
import {useArticles} from '../services/useArticle';
import Footer from './Footer';

export default function ArticleView({navigation}) {
  return (
    <View style={{flex: 1}}>
      <ArticleList />
      <Footer onClick={() => navigation.navigate('Panier')} />
    </View>
  );
}
