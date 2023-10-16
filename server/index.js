
const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())

app.get('/hello', (req, res)=>{
    res.send('hello world')
})

app.post('/api/register', (req, res)=>{
    console.log(req.body)
    res.json({status: 'ok'})
})

app.listen(1337, ()=>{
    console.log('server started on 1337')
})