const store = (store) => {
  localStorage.setItem('shopping-cart', JSON.stringify(store));
}

export default store ;