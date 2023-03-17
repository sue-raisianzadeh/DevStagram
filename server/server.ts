import { join } from 'node:path'
import express from 'express'
import path from 'node:path'

const server = express()

server.use(express.static(join(__dirname, 'public')))

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

export default server
