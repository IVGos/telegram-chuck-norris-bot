class ChuckNorris {
  static getJoke() {
    return fetch('https://api.chucknorris.io/jokes/random').then((res) => res.json());
  }

  static async  tellJoke() {
    const joke = await ChuckNorris.getJoke();
    console.log(joke.value);
  }
}

ChuckNorris.tellJoke()
module.exports = ChuckNorris;
