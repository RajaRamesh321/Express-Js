const express = require('express')
const app = express()
const fs=require('fs')
const port=3000

// app.use(express.static("punlic"))

// Middleware 1 -logger for our application
app.use((req, res,next) => {
fs.appendFileSync("Raja.txt",`${Date.now()} is a ${req.method}\n }` )
res.send("Hacked by Middleware 1")  //if we send res in this middlewrae the next wont get executed and we get error if we use next ()
console.log('m1')
// next()
})

// Middleware 2

app.use((req, res,next) => {
console.log('m2')
// res.send("Hacked by Middleware")
next()
})

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World! MiddleWare')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })