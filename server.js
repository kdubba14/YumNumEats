//const express = require('express')
//const { join } = require('path')
//const serveStatic = require('serve-static')
//const { parse } = require('url')
const next = require('next')
//const bodyParser = require('body-parser')
const { createServer } = require('http')
const { join } = require('path')
const { parse } = require('url')

const port = parseInt(process.env.PORT, 10) || 3030
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // const server = express()

  // server.use('/static', express.static('./static'));
  // server.use(bodyParser.json())

  // /*const parsedUrl = parse(req.url, true)
  // const { pathname } = parsedUrl*/

  // server.get('/a', (req, res) => {
  //   return app.render(req, res, '/a', req.query)
  // })

  // server.get('/b', (req, res) => {
  //   return app.render(req, res, '/b', req.query)
  // })

  // server.get('/posts/:id', (req, res) => {
  //   return app.render(req, res, '/posts', { id: req.params.id })
  // })

  // server.get('*', (req, res) => {
  //   return handle(req, res)
  // })

  // /*server.get('/sw-cached.js', (req, res) => {
  //   const filePath = './.next/server/static/development/pages/index.js'
  //     app.serveStatic(req, res, filePath)
  //   return res.status(200)
  // })*/

  // server.listen(port, err => {
  //   if (err) throw err
  //   console.log(`> Ready on http://localhost:${port}`)
  // })

  createServer((req, res) => {
    const parsedUrl = parse(req.url, true)
    const { pathname } = parsedUrl

    // handle GET request to /service-worker.js
    if (pathname === '/service-worker.js') {
      const filePath = join(__dirname, '.next', pathname)

      app.serveStatic(req, res, filePath)
    } else {
      handle(req, res, parsedUrl)
    }
  })
  .listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
