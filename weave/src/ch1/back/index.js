const express = require('express');

const db = require('./models');

const app = express();
db.sequelize.sync();

//API는 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.get('/api/user', (req,res) => {

});
app.post('/api/user', (req,res) => {

});
app.get('/api/user/:id', (req,res) => {//남의 정보 가져오는것 

});
app.post('/api/user/logout', (req,res) => {

});
app.post('/api/user/login', (req,res) => {

});
app.get('/api/user/:id/follow', (req,res) => { 

});
app.post('/api/user/:id/follow', (req,res) => { 

});
app.delete('/api/user/:id/follow', (req,res) => {

});
app.delete('/api/user/:id/follower', (req,res) => {

});
app.get('/api/user/:id/posts', (req,res) => {

});
app.get('/api/posts', (req,res) => {

});
app.post('/api/post', (req,res) => {
    
});
app.post('/api/post/images', (req,res) => {
    
});


app.listen(3065, ()=>{
    console.log('server is running on http://localhost:3065');
});

