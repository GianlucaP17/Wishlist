const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const username = urlParams.get('username')
window.location.href = "wishlist://username:" + username;
