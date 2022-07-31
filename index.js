const connectToMongo=require('./db');
const express = require('express')
const dotenv=require('dotenv');
var cors=require('cors')
require('dotenv').config();
connectToMongo();
const app = express()
const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.get('/',(req,res)=>{res.send("gdkjhl")})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
