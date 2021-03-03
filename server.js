const express = require('express')
const { v4: uuidv4 } = require('uuid')

const app = express()

let users = []

app.use(express.json())

app.get('/api/users', (req, res) => {
  res.json(users)
})

app.post('/api/users', (req, res) => {
  const newUser = { ...req.body, id: uuidv4() }
  users.push(newUser)
  res.json(newUser)
})

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params
  res.json(users.find(user => user.id === id))
})

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params
  users = users.filter(user => user.id !== id)
  res.json(users)
})

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000')
})
