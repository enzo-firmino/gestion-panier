import ArticlesContext from '../store/store';
import {useContext} from 'react';
import {removeFromPanier, setQuantity, addToPanier} from './fetch';

export function useQuantity() {
  const {panier, dispatch} = useContext(ArticlesContext);

  function onUpdate(quantity, article) {
    if (panier[article.id]) {
      if (quantity === 0) {
        removeFromPanier(article).then((r) =>
          dispatch({type: 'removeFromPanier', article: article}),
        );
      } else {
        setQuantity(article, quantity).then((r) =>
          dispatch({
            type: 'setQuantity',
            article: article,
            quantity: quantity,
          }),
        );
      }
    } else {
      if (quantity !== 0) {
        addToPanier(article, quantity).then((r) =>
          dispatch({
            type: 'setQuantity',
            article: article,
            quantity: quantity,
          }),
        );
      }
    }
  }

  function getQuantity(articleId) {
    return panier[articleId] ? panier[articleId].quantity : 0;
  }

  return [onUpdate, getQuantity];
}
