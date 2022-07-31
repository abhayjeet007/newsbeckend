const { default: mongoose } = require('mongoose');
const mongooose=require('mongoose');
const mongoURI="mongodb://abhayjeet007:abhayjeet@cluster0-shard-00-00.ixpso.mongodb.net:27017,cluster0-shard-00-01.ixpso.mongodb.net:27017,cluster0-shard-00-02.ixpso.mongodb.net:27017/?ssl=true&replicaSet=atlas-88srek-shard-0&authSource=admin&retryWrites=true&w=majority";
const connectToMongo=()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("connected");
    })
} 
module.exports=connectToMongo;
// mongodb://localhost:27017/inotebook