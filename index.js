const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello devops lab2')
})

app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})