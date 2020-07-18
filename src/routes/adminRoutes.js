const express = require("express");
const adminRouter=express.Router();

adminRouter.get('/',function(req,res){
    res.render("addbook",{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'},{link:'/admin',name:'ADD BOOK'}],
        title:'Library',
    });
});
adminRouter.get('/add',function(req,res){
    res.send("iam added");
})

module.exports=adminRouter;