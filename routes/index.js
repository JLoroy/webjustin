var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log("load home, isConnected?:"+req.session.permName);
    res.render('serious',{session:req.session});
});
router.get('/magasin', function(req, res, next) {
    console.log("load home, isConnected?:"+req.session.permName);
    res.render('serious',{session:req.session});
});

router.get('/cg',  function(req, res, next) {
    res.render('cg',{session:req.session});
});

router.get('/improc',  function(req, res, next) {
    res.render('improc',{session:req.session});
});

router.get('/mhf',  function(req, res, next) {
    res.render('mhf',{session:req.session});
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
        case 'unintended':
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

var aventCalendar = require("./aventCalendar");
router.get('/avent',  function(req, res, next) {
    if(req.session.permission > 0){
        res.render('avent',{session:req.session});
    }
    else{
        res.render('unauthorized',{});
    }
});
router.get('/aventCalendar', aventCalendar.calendar);


router.get('/nico',  function(req, res, next) {
    if(req.session.permission > 0){
        res.render('nico',{session:req.session});
    }
    else{
        res.render('unauthorized',{});
    }
});

router.get('/blog',  function(req, res, next) {
    if(req.session.permission > 0){
        res.render('blog',{session:req.session});
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
router.get('/hatonjeu/about',  function(req, res, next) {
    res.render('hatonjeu/about',{session:req.session});
});
router.get('/hatonjeu/jeux',  function(req, res, next) {
    res.render('hatonjeu/jeux',{session:req.session});
});
router.get('/hatonjeu/events',  function(req, res, next) {
    res.render('hatonjeu/events',{session:req.session});
});
router.get('/hatonjeu/contact',  function(req, res, next) {
    res.render('hatonjeu/contact',{session:req.session});
});
module.exports = router;
