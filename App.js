/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import ArticleView from './src/components/ArticleView';
import Title from './src/components/Title';
import ArticlesContext from './src/store/store';
import {useArticles} from './src/services/useArticle';
import NavigationContainer from '@react-navigation/native/src/NavigationContainer';
import {createStackNavigator} from '@react-navigation/stack';
import {CartView} from './src/components/CartView';

const App: () => React$Node = () => {
  const [articles, panier, dispatch] = useArticles();

  const Stack = createStackNavigator();

  return (
    <>
      <View style={styles.body}>
        <Title />
        <ArticlesContext.Provider
          value={{
            articles: articles,
            panier: panier,
            dispatch: dispatch,
          }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="ListeArticles">
              <Stack.Screen name="ListeArticles" component={ArticleView} />
              <Stack.Screen name="Panier" component={CartView} />
            </Stack.Navigator>
          </NavigationContainer>
        </ArticlesContext.Provider>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.lighter,
    flex: 1,
  },
});

export default App;
