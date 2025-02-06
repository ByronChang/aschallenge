const fs = require('fs-extra');
const path = require('path');

async function copySwaggerAssets() {
  const source = path.join(__dirname, 'node_modules', 'swagger-ui-dist');
  const destination = path.join(__dirname, 'dist', 'docs');

  try {
    await fs.copy(source, destination);
    console.log('Swagger assets copied successfully!');
  } catch (err) {
    console.error('Error copying Swagger assets:', err);
  }
}

copySwaggerAssets();
