const express= require('express');
const app= express();
app.use(express.static('public'));

app.get('/home',(request,response)=>{
    response.sendFile(__dirname+ '/views/home-page.html');
});

app.get('/about',(request,response)=>{
    response.sendFile(__dirname +'/views/about.html');
});

app.get('/work',(request,response)=>{
    response.sendFile(__dirname +'/views/work.html');
});

app.get('/gallery',(request,response)=>{
    response.sendFile(__dirname +'/views/gallery.html');
});





app.listen(2000,()=>{
    console.log('My app is listening')
})