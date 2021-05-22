const express = require('express')
const next = require('next')
const dotenv = require('dotenv')

dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.all('*', (req, res) => handle(req, res))
  server.listen(port, (err) => {
    if (err) throw err
    // eslint-disable-next-line no-console
    console.log(`> Server running on on http://localhost:${port}`)
  })
})
