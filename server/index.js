const server = require('./server')

const port = process.env.PORT

server.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Server listening...')
})
