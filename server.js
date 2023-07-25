const express = require('express');

const App= express();

App.get('/api',(request,response)=>{
    response.json({
        users:["Category:Action Books","Title:News Nations", "Price:12€",]
    })
});

App.listen(5000,()=>{console.log("Server started on port 5000")})


