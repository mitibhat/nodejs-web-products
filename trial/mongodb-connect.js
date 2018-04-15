//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');
// var obj=new ObjectID();
// console.log(obj);
// var user={name:'Xing',age:23}
// var {name}=user;
// console.log(name);
MongoClient.connect('mongodb://localhost:27017',(err,client)=>
{
  if(err){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  // var db=client.db('ProductDB');
//   db.collection('Products').insertOne({
// text: 'Laptop',
// price: 40000,
// qoh: 5,
// sup_id: 3
//   },(err,result)=>{
//     if(err){
//       return console.log(error in adding,err);
//     }
//     console.log(JSON.stringify(result.ops,undefined,2));
//   });


// db.collection('Users').insertOne({
// name: 'Jack',
// age: 20,
// location: 'Kolkata'
//   },(err,result)=>{
//     if(err){
//       return console.log(error in adding,err);
//     }
//     //console.log(JSON.stringify(result.ops,undefined,2));
//     console.log(result.ops[0]._id.getTimestamp());
//   });
  client.close();
});
