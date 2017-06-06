/**************************************************
 File: home.js
 Name: Home
 Explain: Home Page
****************************************By QQBoxy*/
/*jshint node: true, esversion: 6 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    res.render('home');
});

router.get('/api/blog', function (req, res) {
    const bloglist = [
        {
            id: 0,
            name: "QQBoxy",
            url: "http://qqboxy.blogspot.com/"
        },
        {
            id: 1,
            name: "CCUBoxy",
            url: "http://ccuboxy.blogspot.com/"
        },
        {
            id: 2,
            name: "CodeBoxy",
            url: "http://codeboxy.blogspot.com/"
        }
    ];
    res.send(JSON.stringify(bloglist, null, 2));
});

module.exports = router;