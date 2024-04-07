const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://ks00921:abcd1234@boilerplate.zpqje8i.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate',
).then(()=>{console.log('MongoDb Connected..')})
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
