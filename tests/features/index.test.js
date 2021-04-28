describe('Poems index page', () => {
  beforeAll(async () => {
     await page.goto('http://localhost:3000/')
    });
  it('has title Poems', async () => {
    const pageTitle = await page.title();
    
    await expect(pageTitle).toBe('Poems')
  });

  it('welcomes the user', async () => {
    await expect(page).toMatchElement('p', { text: 'Welcome to Poems'})
  });
  it('grabs the poems id element', async () => {
    await page.goto('http://localhost:3000');
  
    await expect(page).toMatchElement('#poems', { text: 'Here you\'ll see poems' })
  });
})