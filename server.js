'use strict';

var express = require('express');
var cors = require('cors');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

// require and use "multer"...

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
     res.sendFile(process.cwd() + '/views/index.html');
  });



app.post('/api/fileanalyse', upload.single('upfile'), function (req, res, next) {
  res.json({
    name: req.file.originalname, 
    type: req.file.mimetype,
    size: req.file.size
  })
})

app.get('/hello', function(req, res){
  res.json({greetings: "Hello, API"});
});


const listener = app.listen(process.env.PORT || 3000, () => {
    console.log('Your app is listening on port ' + listener.address().port)
  })
