// dotenv configuration
require('dotenv').config()

// dotenv variables
const PORT=process.env.PORT||4000
const DB=process.env.DB

const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')


// Database Connection
mongoose.connect(DB).then(()=>{
    console.log("Database Connected")
}).catch(()=>{
    console.log("Connection Failed")
})


// Custom variables and functions
const app=express()
const router=require('./RouteHandler/routehandlers')


// USAGES
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api',router)


app.listen(PORT,()=>{
    console.log(`Server Running ${PORT} `)
})