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

  insertPoem(poemContent, fn) {
    client.query(`INSERT INTO poems(content) VALUES($1) RETURNING content`, [poemContent], (err, res) => {
      fn()
    })
  }
}
poem = new Poem()

module.exports = poem;
