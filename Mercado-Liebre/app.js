const express = require('express');
const path = require('path');

const app = express();

app.get('', (req,res) =>{
    res.send("Ahora si entre");  
});

app.get('/inicio', (req,res) =>{

    res.sendFile((__dirname + '/views/home.html'));  
});

app.get('/registro', (req,res) =>{

    res.sendFile((__dirname + '/views/register.html'));  
});

app.get('/login', (req,res) =>{

    res.sendFile((__dirname + '/views/login.html'));  
});



app.use(express.static(path.join(__dirname, './public')));  



app.listen(3000,() => console.log('El servidor funciona'));



