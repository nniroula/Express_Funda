const express = require('express')

const app = express();

// start the server
app.listen(3000, function(){
    console.log('Server Started on port 3000');
})