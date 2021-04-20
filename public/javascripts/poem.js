const client = require('../../db/dbConfig');

class Poem {
  constructor() {

  }

  allPoems(fn) {
    client.query(`SELECT content FROM poems;`, (err, res) => {
      var allPoems = res.rows;
      
      fn(allPoems)
    })
  };
}
poem = new Poem()

module.exports = poem;
