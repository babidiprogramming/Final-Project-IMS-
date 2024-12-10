const express = require('express');
const expressLayout = require('express-ejs-layouts');
const methodOverride = require('method-override');
const connectDB = require('./server/config/db');
const flash = require('connect-flash');
const session = require('express-session');
const port =3000 || process.env.PORT;
const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));

//TO CONNECT TO DATABASE
connectDB();

// Setup Express session
app.use(
  session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1week
    }
  })
);
// Flash messages
app.use(flash({ sessionKeyName: 'flashMessage' }));

//PUBLIC STATIC FILES
app.use(express.static('public'));



//view engines
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');
 

//Routes
app.use('/', require('./server/routes/user'))
  //handle 404
  app.get('*', (req, res) => {
    res.status(404).render('404');
  });


app.listen(port, () =>{
  console.log(`Listening on port ${port}.`)
});
