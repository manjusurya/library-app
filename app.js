const express = require("express");
const app= express();
const booksRouter=require('./src/routes/bookRoutes');
const authorsRouter=require('./src/routes/authorRoutes');
const signupRouter=require('./src/routes/signupRoutes');
const loginRouter=require('./src/routes/loginRoutes');
const adminRouter=require('./src/routes/adminRoutes');
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/signup',signupRouter);
app.use('/login',loginRouter);
app.use('/admin',adminRouter);
app.get('/',function(req,res){
    res.render("index",{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'},{link:'/admin',name:'ADD BOOK'}],
        
        title:'Library'
    });
});


app.listen(4000);