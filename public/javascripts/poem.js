class Poem {
  constructor(allPoems) {
    this._allPoems = [
      "All that is gold does not glitter",
      "Shall be",
      "It is a sport"
    ];
  }

  get allPoems() {
    return this._allPoems;
  }
}
poem = new Poem()

module.exports = poem;
// console.log(poem._allPoems)
