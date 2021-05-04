describe('add a poem', () => {
  beforeAll( async() => {
    jest.setTimeout(16000);
      await page.goto('http://localhost:3000/poems/new');
  });
  it('renders the new page with the poem', async() => {
      await page.type('textarea', 'This is my first poem');

      await page.click('button')
      await page.waitForNavigation();

      await expect(page).toMatch('Success. Poem added');
  });
})
