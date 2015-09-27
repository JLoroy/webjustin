var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("load home, isConnected?:"+req.session.permName);
  res.render('home',{session:req.session});
});

router.post('/authorization', function(req,res,next){
    var perm = 0;
    var permName = 'Stranger';
    console.log(req);
    switch(req.body.password){
        case 'RIPficus':
            perm = 1;
            permName = 'Friend';
            break;
        case '27avril':
            perm = 2;
            permName = 'Bro';
            break;
        case 'pandamour':
            perm = 3;
            permName = 'Namoureuse';
            break;
        case '0pa&0ma':
            perm = 4;
            permName = 'Moi-meme';
            break;
    }
    sess = req.session;
    sess.permission = perm;
    sess.permName= permName;
    console.log(permName + " connected");
    res.end();
});

router.post('/disconnect', function(req,res,next){
    sess = req.session;
    sess.permission = 0;
    sess.permName = 'Stranger';
    console.log('disconnected');
    res.end();
});

router.post('/permName', function(req,res,next){
    sess = req.session;
    console.log(sess);
    if(req.session.permName){
        res.send({permName:req.session.permName, permission:req.session.permission});
    }
    else{
        res.send({permName:"Stranger", permission:0});
    }

});

router.get('/juliette',  function(req, res, next) {
    if(req.session.permission > 2){
        res.render('juliette',{session:req.session});
    }
    else{
        res.render('unauthorized',{});
    }
});


router.get('/nico',  function(req, res, next) {
    if(req.session.permission > 0){
        res.render('nico',{session:req.session});
    }
    else{
        res.render('unauthorized',{});
    }
});


router.get('/armand',  function(req, res, next) {
    res.render('armand',{session:req.session});
});

router.get('/hatonjeu',  function(req, res, next) {
    res.render('hatonjeu',{session:req.session});
});

module.exports = router;
