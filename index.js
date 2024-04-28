const express = require('express')
const app = express()
const port = 3000
const bodyParser=require('body-parser');
const config = require('./config/key');

const { User } = require("./models/User");

//applicaiton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,
).then(()=>{console.log('MongoDb Connected..')})
.catch(err=>console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 새해복많이받으세요!')
})

app.post('/register',async(req,res)=>{
  //회원가입할때 필요한 정보들을 client에서 가져오면
  //그것들은 데이터베이스에 넣어준다.
  const user = new User(req.body)

  try{
    await user.save;
    return res.status(200).json({success:true})
  }
  catch(err){
    return res.json({ success:false, err})

  }
 })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
