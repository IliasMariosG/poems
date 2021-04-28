describe('add a poem', () => {
  beforeEach( () => {
    jest.setTimeout(6000);
  })
  it('renders the new page with the poem', async () => {
    await page.goto('http://localhost:3000/poems/new');
    await page.type('textarea', 'This is my first poem');
   
    await page.click('button')
    await page.waitForNavigation();
    await page.screenshot({ path: 'tmp/screenshot.png' });

    await expect(page).toMatch('success: This is my first poem');
  });
})
