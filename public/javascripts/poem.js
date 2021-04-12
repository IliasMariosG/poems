const client = require('../../db/dbConfig');

class Poem {
  constructor() {
    client.connect();
    client.query(`SELECT * FROM poems;`, (err, res) => {
      var allPoems = res.rows;
      client.end()
      
      this._allPoems = allPoems
    })
  }

  get allPoems() {
    return this._allPoems;
  }
}
poem = new Poem()
// console.log(poem.allPoems)
module.exports = poem;
// console.log(poem._allPoems)
