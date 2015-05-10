var express =           require('express'),
    bodyParser =        require('body-parser'),
    app =               express(),
    Post =              require('./models/post')
    

app.use(bodyParser.json())
app.use('/', express.static(__dirname + '/client/'))
app.use('/api/posts', require('./controllers/post-controller'))

app.listen(3000, function() {
    console.log('imma server')
})