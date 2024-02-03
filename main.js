const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.get('/about', (req, res) => {
  res.send('About Us')
})

app.get('/contact', (req, res) => {
  res.send('contact Us')
})
app.get('/blog/:slug', (req, res) => {

    // http://127.0.0.1:3000/blog/intro-to-js/?mode=dark&region=in for this url
    console.log(req.params) //this will show  { slug: 'intro-to-js' }
    console.log(req.query) // this will show  { mode: 'dark', region: 'in' }
  res.send(`Hello from blog to ${req.params.slug}`)
})
// app.get('/blog/intro-to-js', (req, res) => {
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