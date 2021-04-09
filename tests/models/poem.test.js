const poems = require('../../public/javascripts/poem.js')

describe('Poem', () => {
  describe('#allPoems', () => {
    it('returns all poems', () => {
      var poemsAll = poems.allPoems
      
      expect(poemsAll).toContain("All that is gold does not glitter")
      expect(poemsAll).toContain("Shall be")
      expect(poemsAll).toContain("It is a sport")
    })
  })
})