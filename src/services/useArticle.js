import {useEffect, useReducer} from 'react';
import {reducerStore} from '../store/reducerStore';
import {getArticles, getPanier} from './fetch';

export function useArticles() {
  const [initialState, reducer] = reducerStore();

  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getArticles().then((articlesFetched) => {
      dispatch({type: 'setArticles', articles: articlesFetched});
    });
    getPanier().then((panierFetched) => {
      dispatch({type: 'setPanier', panier: transformIntoMap(panierFetched)});
    });
  }, []);

  return [state.articles, state.panier, dispatch];
}

function transformIntoMap(panier) {
  let map = {};
  for (let article of panier) {
    let articlePanier = {...article};
    delete articlePanier.id;
    map[article.id] = articlePanier;
  }
  return map;
}
