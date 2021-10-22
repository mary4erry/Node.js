const express = require('express')
const path = require('path')
const consolidate = require('consolidate')

const app = express()

//Middleware
app.engine('hbs', consolidate.handlebars)
app.set('view engine', 'hbs')
app.set('views', path.resolve(__dirname, 'views'))
app.use(express.json() )
// app.use('/users', express.json() )
app.use('/assets', express.static(path.resolve(__dirname, 'assets')))
app.use((req, res, next) => {
  console.log('middleware');
  req.user = { name: 'John'}
  next() //res.redirect('/...)
})

app.get('/', (req, res) => {
  res.render('user', {
    fullName: 'John McLane',
    achievements: ['Mashine gun', 'polise officer']
  })
})

// app.get('/', (req, res) => {
//   // console.log(req);
//   // console.log('Helo world');
//   // res.send('Hello browser')
//   // res.json({ message: 'Hello world' })
//   // res.send({ '<h2>Hello world</h2>'})
//   res.sendFile(path.resolve(__dirname, './index.html'))
// })

app.get('/users', (req, res) => {
  res.send('users')
})

app.get('/users/:id', (req, res) => {
  console.log(req.params, req.query);
  res.send('Params')
})
app.post('/tasks', (req, res) => {
  console.log(req.body)
  res.send('OK')

} )

app.listen(8000, () => {
  console.log('server has been started');
} )