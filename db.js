var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/superdb', function() {
    console.log('mongo is alive')
})

module.exports = mongoose