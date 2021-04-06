import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Title(props) {
  return (
    <Text h1 style={styles.title}>
      Application gestion de panier
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    padding: 15,
  },
});
