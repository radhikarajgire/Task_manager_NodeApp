const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
})


// const me = new User({
//     name: 'Rads',
//     email:'radsjj@gmail.com',
//     password:'  hdgsfisf'
// })

// me.save().then(() => {
// console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })


// const task = new Task({
//     description: 'Eat lunch'
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error', error)
// })