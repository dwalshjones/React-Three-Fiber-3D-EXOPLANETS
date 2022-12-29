const server = require('./server')

const port = 3001

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
