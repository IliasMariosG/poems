describe('Poems index page', () => {
  it('has title Poems', async () => {
    await page.goto('http://localhost:3000');

    await expect(page).toMatchElement('title', {text: 'Poems'})
  });

  it('welcomes the user', async () => {
    await page.goto('http://localhost:3000');

    await expect(page).toMatchElement('p', { text: 'Welcome to Poems'})
  })
})