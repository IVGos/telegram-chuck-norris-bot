class ChuckNorris {
  static getJoke() {
    return fetch("https://api.chucknorris.io/jokes/random").then(res => res.json())
  }
} 

module.exports = ChuckNorris