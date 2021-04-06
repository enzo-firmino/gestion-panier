import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Quantity} from './Quantity';

export default function Article({simple, ...props}) {
  return (
    <View style={styles.article}>
      <Image
        style={{width: 50, height: 50}}
        source={{uri: 'http://localhost:7000' + props.article.picture}}
      />
      <View style={{display: 'flex', flexDirection: 'column'}}>
        <Text> {props.article.description}</Text>
        <Text> {props.article.prix} €</Text>
      </View>
      {!simple && <Quantity article={props.article} />}
    </View>
  );
}
Article.defaultProps = {
  simple: false,
};

const styles = StyleSheet.create({
  article: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});
