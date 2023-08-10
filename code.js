async function createIndexHtml(self) {
  const content = `
    <h1>Taylor-test-repo</h1>
    <ul>
      <li>Taylor_JD</li>
      <li>Gordy-BP</li>
    </ul>
    <p>Come back soon for something exciting!</p>
  `;
  
  await self.writeFiles([
    {
      path: 'index.html',
      data: content
    }
  ]);
  
 self.logger.info('index.html created successfully.');
}
createIndexHtml(this)