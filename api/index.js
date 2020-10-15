const express = require('express')
const basicAuth = require('express-basic-auth')
const cors = require('cors')

const app = express()

app.use(cors({
  // Access-Control-Allow-Origin: http://localhost:4000
  origin: 'http://localhost:4000',
  // Access-Control-Allow-Credentials: true
  credentials: true,
  // Reflects: Access-Control-Allow-Headers: authorization
  // allowedHeaders: undefined,
  // Default: Access-Control-Allow-Methods: GET,HEAD,PUT,PATCH,POST,DELETE
  // methods: undefined
}))

const auth = basicAuth({ users: { 'admin': 'secret' }/*, challenge: true*/ })

app.get('/login', auth, (req, res) => res.sendStatus(200))

app.get('/info', auth, (req, res) => res.json({ name: 'Admin' }))

app.get('/logout', auth, (req, res) => res.sendStatus(401))

app.listen(3000, () => console.log(`http://localhost:3000`))
