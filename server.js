var express =           require('express'),
    bodyParser =        require('body-parser'),
    app =               express(),
    Post =              require('./models/post')

app.use(bodyParser.json())

app.get('/api/posts', function(req, res, next) {
    Post.find(function(err, posts) {
        if (err) { return next(err) }
        res.json(posts)
    })
})

app.post('/api/posts/', function(req, res, next) {
    var post = new Post({
        username: req.body.username,
        text: req.body.text
    }) 
    
    post.save(function(err, post) {
        if (err) { return next(err) }
        res.json(201, post)
    })
})

app.listen(3000, function() {
    console.log('imma server')
})