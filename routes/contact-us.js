  
const path = require('path');

const express = require('express'); 

//const rootDir = require('../util/path');

const router = express.Router();

router.get('/contact-us', (req, res, next)=> {
  // res.sendFile(path.join(rootDir, 'views', 'contact-us.html'));
  res.sendFile(path.join(__dirname,'../','views','contact-us.html'))
});

router.post( '/success', (req, res, next) => {
  console.log( 'Form-Data', req.body);
 //res.redirect('/');
  res.send('<h1>Thank You for submitting details</h1>')
});

module.exports = router;

