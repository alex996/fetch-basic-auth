const express = require('express')
const basicAuth = require('express-basic-auth')
const cors = require('cors')

const app = express()

app.use(cors({ origin: 'http://localhost:4000', credentials: true }))

const auth = basicAuth({ users: { 'admin': 'secret' }/*, challenge: true*/ })

app.get('/login', auth, (req, res) => res.sendStatus(200))

app.get('/info', auth, (req, res) => res.json({ name: 'Admin' }))

app.get('/logout', auth, (req, res) => res.sendStatus(401))

app.listen(3000, () => console.log(`http://localhost:3000`))
