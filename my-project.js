const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get('username')
window.location = "wishlist://username:" + product;
