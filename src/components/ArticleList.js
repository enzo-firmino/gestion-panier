import React, {useContext} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Article from './Article';
import ArticlesContext from '../store/store';

export default function ArticleList() {

  const value = useContext(ArticlesContext);
  const renderArticle = ({item}) => {
    return <Article article={item} />;
  };

  return (
    <FlatList
      style={{borderTopColor: 'black', borderTopWidth: 2}}
      data={value.articles}
      renderItem={renderArticle}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}


