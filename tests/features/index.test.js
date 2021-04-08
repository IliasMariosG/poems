describe('Poems index page', () => {
  it('has title Poems', async () => {
    await page.goto('http://localhost:3000');
    
    const pageTitle = await page.title('http://localhost:3000');
    
    await expect(pageTitle).toBe('Poems')
  });

  it('welcomes the user', async () => {
    await page.goto('http://localhost:3000');

    await expect(page).toMatchElement('p', { text: 'Welcome to Poems'})
  })
  it('grabs the poems id element', async () => {
    await page.goto('http://localhost:3000');
  
    await expect(page).toMatchElement('#poems', { text: 'Here you\'ll see poems' })
  })
})