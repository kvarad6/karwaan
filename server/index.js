const express = require('express')
const app = express()

const cors = require('cors')
const mongoose = require('mongoose');

const User = require('./models/user.model')

app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://root:root@cluster0.pmm1cfh.mongodb.net/user-database')
    .then(() => console.log('Connected!'));


app.get('/hello', (req, res) => {
    res.send('hello world')
})

app.post('/api/register', async (req, res) => {
    console.log(req.body)
    // res.json({status: 'ok'})
    try {
        const user = await User.create({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })
        res.json({ status: 'ok' })
    }
    catch (error) {
        res.json({ status: 'error', error: 'Duplicate Email' })
    }
})

app.post('/api/login', async (req, res) => {
    console.log(req.body)
    // res.json({status: 'ok'})

    const user = await User.findOne({
        email: req.body.email,
        password: req.body.password
    })
    if (user) {
        return res.json({ status: 'ok', user: true })
    } else {
        return res.json({ status: 'error', user: false })
    }
})

app.listen(1337, () => {
    console.log('server started on 1337')
})