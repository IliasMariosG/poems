const poems = require('../../public/javascripts/poem.js')
const client = require('../../db/dbConfig');

describe('Poem', () => {
  describe('#allPoems', () => {
    it('returns all poems', (done) => {

      function fn(data) {
        try {
          expect(data[0].content).toContain("All that is gold does not glitter")
          expect(data[1].content).toContain("Shall be")
          expect(data[2].content).toContain("It is a sport")
          expect(data[3].content).toContain("The kid went on to play outside")
          done();
        } catch (error) {
            done.fail(error);
        }
      }
      poems.allPoems(fn);
    });
  });
});
