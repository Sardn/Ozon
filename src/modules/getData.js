const getData = (str) => {
  return fetch(
          `https://test-e9626-default-rtdb.firebaseio.com/goods.json`)
      .then((response) => {
          return response.json()
      })
}

export default getData