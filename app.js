const express = require('express')
const mongoose =require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const authRoutes = require('./routs/auth')
const analyticsRoutes = require('./routs/analytics')
const categoryRoutes = require('./routs/category')
const orderRoutes = require('./routs/order')
const positionRoutes = require('./routs/position')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI, {useNewUrlParser: true})
// mongoose.connect(db, { useNewUrlParser: true})
    .then(() => console.log('MongoDB connected.'))
    .catch(error => console.log(error))

app.use(require('cors')('dev'))
app.use(require('morgan')())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/analytics', analyticsRoutes)
app.use('/api/category', categoryRoutes)
app.use('/api/category', orderRoutes)
app.use('/api/position', positionRoutes)




module.exports = app
