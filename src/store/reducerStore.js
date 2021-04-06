export function reducerStore() {
  const initialState = {
    articles: [],
    panier: {},
  };

  function reducer(state, action) {
    switch (action.type) {
      case 'setPanier':
        return {...state, panier: action.panier};
      case 'setArticles':
        return {...state, articles: action.articles};
      case 'setQuantity':
        action.article.quantity = action.quantity;
        return {
          ...state,
          panier: {...state.panier, [action.article.id]: action.article},
        };
      case 'removeFromPanier':
        const newPanier = {...state.panier};
        delete newPanier[action.article.id];
        return {
          ...state,
          panier: newPanier,
        };
      case 'emptyPanier':
        return {...state, panier: {}};
      default:
        return {...state, data: action.articles};
    }
  }

  return [initialState, reducer];
}
