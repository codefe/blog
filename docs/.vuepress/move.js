const fs = require('fs-extra')

async function copyFiles () {
  try {
    await fs.copy('./dist', '/var/www')
    console.log('success!')
  } catch (err) {
    console.error(err)
  }
}

copyFiles()