describe('Poems page', () => {
  it('return a status of 200', async () => {
    const response = await page.goto('http://localhost:3000/poems');
    actualResponseStatus = response.status();
    expectedResponseStatus = 200 || 304;

    await expect(actualResponseStatus).toEqual(expectedResponseStatus);
  });
})