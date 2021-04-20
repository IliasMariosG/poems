const poems = require('../../public/javascripts/poem.js')
const client = require('../../db/dbConfig');

describe('Poem', () => {
  describe('#allPoems', () => {
    it('returns all poems', (done) => {

      poems.allPoems((allPoems) => {
        expect(allPoems[0].content).toContain("All that is gold does not glitter")
        expect(allPoems[1].content).toContain("Shall be")
        expect(allPoems[2].content).toContain("It is a sport")
        expect(allPoems[3].content).toContain("The kid went on to play outside")
        done();
      })
    });
  });
});
