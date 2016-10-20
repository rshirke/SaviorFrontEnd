var express = require('express');
var router = express.Router();
var fs = require('fs');
var popup = require('window-popup').windowPopup;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Max Buy' });
});


router.post('/login', function(req, res, next) {
  console.log("Login Button was pressed with user name and password");

  var loginPath = 'login.json';

  try {
    var stats = fs.statSync(loginPath);
    var dataString = fs.readFileSync(loginPath);
    userdata = JSON.parse(dataString);
    console.log("The users database is "+ userdata);
  } catch (e) {
    console.log('Data File Does Not Exist... Creating Empty File...');
    fs.writeFileSync(loginPath, JSON.stringify([]));
  }

    username= req.body.username,
    password= req.body.password,
        console.log("username is "+ username);
  console.log("password is "+password);

  for (var i = 0; i < userdata.length; i++) {

    if (userdata[i].uname === username && userdata[i].pwd === password) {

      res.redirect('/index');
      break;
    }
  }
  if(i===userdata.length)
  {
    res.redirect('/');

    //window.alert("Please enter valid Username or Password !!");
    //alert("Please enter valid Username or Password !!");
    //res.send('Please Enter Valid Credentials !!!');
  }

});


module.exports = router;
