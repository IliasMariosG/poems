const poems = require('../../public/javascripts/poem.js')
const client = require('../../db/dbConfig');

describe('Poem', () => {
  describe('#allPoems', () => {
    it('returns all poems', () => {
      client.connect();
      client.query(`INSERT INTO poems VALUES(1, All that is gold does not glitter)`)
      var poemsAll = poems.allPoems
      
      expect(poemsAll).toContain("All that is gold does not glitter")
      expect(poemsAll).toContain("Shall be")
      expect(poemsAll).toContain("It is a sport")
      expect(poemsAll).toContain("The kid went on to play outside")
    })
  })
})