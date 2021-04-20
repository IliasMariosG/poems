describe('Poems page', () => {
  it('has a list of poems', async () => {
    await page.goto('http://localhost:3000/poems');
    // const poems = 
    
    await expect(page).toMatch("All that is gold does not glitter");
    await expect(page).toMatch("Shall be");
    await expect(page).toMatch("It is a sport")
    await expect(page).toMatch("The kid went on to play outside")
  });
});
