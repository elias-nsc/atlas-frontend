// setup-estrutura.js
const fs = require('fs')
const path = require('path')

const structure = [
  'api',
  'components/Header',
  'components/Sidebar',
  'components/ChatWindow',
  'components/InputArea',
  'styles',
]

const createFolders = () => {
  structure.forEach((dir) => {
    const fullPath = path.join(__dirname, dir)
    if (!fs.existsSync(fullPath)) {
      fs.mkdirSync(fullPath, { recursive: true })
      console.log('Criado:', dir)
    }
  })
}

createFolders()
