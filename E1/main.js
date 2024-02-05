const express = require('express')
const blog=require('./routes/blog')
const shop=require('./routes/shop')
const app = express()
const port = 3000

app.use(express.static('public'))

app.use('/blog',blog)
app.use('/shop',shop)



app.get('/', (req, res) => {
    console.log("Hey it is get request")
  res.send('Hello World2!')
}).post('/', (req, res) => {
    console.log("Hey it is post request")
  res.send('Hello post request!')
}).put('/', (req, res) => {
    console.log("Hey it is put request")
  res.send('Hello put request!')
})
app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html',{root:__dirname})
    // res.sendFile(path.join(__dirname, 'templates', 'index.html'));
})
app.get("/api", (req, res) => {
    res.json({a:1,b:2,c:3,name:["raja",'lali']})
    // res.sendFile(path.join(__dirname, 'templates', 'index.html'));
})


//     //logic to fetch intro to js from the db
//   res.send('Hello Javascript')
// })

// app.get('/blog/intro-to-python', (req, res) => {
//     //logic to fetch intro to js from the db
//   res.send('Hello inro-to-Javascript')
// })


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})