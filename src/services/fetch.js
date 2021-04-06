function getArticles() {
  return fetch('http://localhost:7000/articles').then((response) =>
    response.json(),
  );
}

function getPanier() {
  return fetch('http://localhost:7000/panier').then((response) =>
    response.json(),
  );
}

function removeFromPanier(article) {
  return fetch('http://localhost:7000/panier/' + article.id, {
    method: 'DELETE',
  });
}

async function emptyPanier(articlesId) {
  for (const id of articlesId) {
    await fetch('http://localhost:7000/panier/' + id, {
      method: 'DELETE',
    });
  }
}

function setQuantity(article, quantity) {
  return fetch('http://localhost:7000/panier/' + article.id, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({quantity}),
  });
}

function addToPanier(article, quantity) {
  return fetch('http://localhost:7000/panier/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({id: article.id, quantity}),
  });
}

export {
  getPanier,
  getArticles,
  removeFromPanier,
  addToPanier,
  setQuantity,
  emptyPanier,
};
