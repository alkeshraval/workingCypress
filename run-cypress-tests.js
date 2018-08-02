const cypress = require('cypress')
const server = require('./app.js')

cypress.run()
.then((results) => {
  return server.stop()
})
