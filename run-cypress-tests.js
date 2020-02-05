const cypress = require('cypress')
const server = require('./app.js')

cypress.run({headless: true})
.then((results) => {
  return server.stop()
})
