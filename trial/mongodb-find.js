//const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err,client)=>
{
  if(err){
    return console.log('Unable to connect to MongoDB');
  }
  console.log('Connected to MongoDB server');
  var db=client.db('ProductDB');
  //   db.collection('Products').find({price: {$gte: 20000}}).toArray().then((docs)=>{
  //  //db.collection('Products').find(
  // //   {_id: new ObjectID('5ad33e55c41f41b126fd9b27')}).toArray()
  //  // .then((docs)=>{
  //    console.log('Products:');
  //    console.log(JSON.stringify(docs,undefined,2));
  //  },(err) =>{
  //    console.console.log('Error occured',err);
  //  });
//  db.collection('Products').find().count().then((count)=>{
 //db.collection('Products').find(
//   {_id: new ObjectID('5ad33e55c41f41b126fd9b27')}).toArray()
 // .then((docs)=>{
 //   console.log('Products:');
 //   console.log(`Products count: ${count} `);
 // },(err) =>{
 //   console.console.log('Error occured',err);
 // });
  db.collection('Products').find({text: 'Laptop'}).count().then((count)=>{
    console.log('Products:');
    console.log(`Products count: ${count} `);
    },(err) =>{
    console.console.log('Error occured',err);
    });

  //client.close();
});
