import React, {useContext, useState} from 'react';
import ArticlesContext from '../store/store';
import Article from './Article';
import {
  FlatList,
  View,
  Button,
  Text,
  Modal,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {emptyPanier, removeFromPanier} from '../services/fetch';
import Footer from './Footer';

export function CartView({navigation}) {
  const {panier, articles, dispatch} = useContext(ArticlesContext);

  const renderArticle = ({item}) => {
    return <Article article={item} />;
  };

  const renderSimpleArticle = ({item}) => {
    return <Article article={item} simple={true} />;
  };

  let articlesPanier = [];
  let totalPrixPanier = 0;
  let totalArticlesPanier = 0;

  const [modalVisible, setModalVisible] = useState(false);

  Object.keys(panier).forEach((key) => {
    let article = articles.find((element) => {
      return element.id == key;
    });
    article.quantity = panier[key].quantity;
    totalPrixPanier += article.prix * panier[key].quantity;
    totalArticlesPanier += panier[key].quantity;
    articlesPanier.push(article);
  });

  async function viderPanier() {
    emptyPanier(Object.keys(panier));
    dispatch({
      type: 'emptyPanier',
    });
  }

  return (
    <View style={{flex: 1}}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Résumé de votre commande</Text>
            <Text>Prix total : {totalPrixPanier}€</Text>
            <Text>Total articles : {totalArticlesPanier}</Text>
            <FlatList
              style={{borderTopColor: 'black', borderTopWidth: 2, flex: 1}}
              data={articlesPanier}
              renderItem={renderSimpleArticle}
              keyExtractor={(item) => item.id.toString()}
            />

            <TouchableHighlight
              style={{...styles.openButton, backgroundColor: '#2196F3'}}
              onPress={() => {
                setModalVisible(false);
              }}>
              <Text style={styles.textStyle}>Done</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
      <View style={styles.buttonOuterLayout}>
        <Button onPress={() => setModalVisible(true)} title="Commander" />
        <Button onPress={viderPanier} title="Vider panier" />
      </View>

      <Text>Prix total : {totalPrixPanier}€</Text>
      <Text>Total articles : {totalArticlesPanier}</Text>
      <FlatList
        style={{borderTopColor: 'black', borderTopWidth: 2}}
        data={articlesPanier}
        renderItem={renderArticle}
        keyExtractor={(item) => item.id.toString()}
      />
      <Footer onClick={() => navigation.navigate('ListeArticles')} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterLayout: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
