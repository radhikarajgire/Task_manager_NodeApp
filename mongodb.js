// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID } = require ('mongodb')


const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)

MongoClient.connect (connectionURL, {useUnifiedTopology: true}, (error, client) => {
    if (error) {
       return console.log('Unable to connect to database')
    }
  const db =  client.db(databaseName)
db.collection('users').findOne({name:'vansh'}, (error, user) => {
    if (error) {
        return console.log ('unable to fetch')
    }
    console.log(user)
})
//   db.collection('users').insertOne({
//       name: 'Rads',
//       age: 27
//   },(error, result) => {
//       if (error) {
//           return console.log('Unable to insert user')
//       }
//       console.log(result.ops)
//   })
// })
// db.collection('users').insertMany([
// {
//     name: 'vansh',
//     age: 5

// },
// {
//     name: 'Guru',
//     age:35
// }
// ],(error,result) => {
//     if (error) {
//         return console.log ('Unable to insert documents!')
//     }
//     console.log(result.ops)
// })
 })