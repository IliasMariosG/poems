describe('add a poem', () => {
  beforeAll(async () => {
    jest.setTimeout(5000);
      await page.goto('http://localhost:3000/poems/new');
  });
  it('renders the new page with the poem', async () => {
      try {
        await Promise.all([
          page.type('textarea', 'This is my first poem'),

          page.click('button'),
          page.waitForNavigation(),
        ]),

        await expect(page).toMatch('Success. Poem added');
      } catch (err) {
        console.log(err);
        await page.close();
      }
  });
})
