const express = require ('express')
const mongoose = require('mongoose')
const app = express()
const todo = require ('./models/Todo')

mongoose.connect( 
    'mongodb+srv://angelv3ga11:<ripvaynedude>@cluster0.iqosywk.mongodb.net/?retryWrites=true&w=majority',{
    userNewUrlParser: true,
    useUnifiedTopology: true

    }
).then() => console.log('Connected to MongoDB')).catch((err)=> console.log(err))

app.get('/todos', async (req, res) => {
    const todos = await todo.finde()
    res.json(todos)
})

app.post('/todo/new')

app.listen(3001, (req, res)=> {
    console.log('Listening on port 3001')
})