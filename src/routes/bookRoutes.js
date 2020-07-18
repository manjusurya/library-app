const express = require("express");
const booksRouter=express.Router();

    
var books=[
    {
        title:'Tom and Jerry',
        author:'joseph barbera',
        genre:'cartoon',
        img:"tj.jpg"
    },
    {
        title:'Django unchained',
        author:'Tarantino',
        genre:'Drama',
        img:"du.jpg",
    },
    {
        title:'Dark Knight',
        author:'Nolan',
        genre:'Fantasy',
        img:"dk.jpg",
    }

]
booksRouter.get('/',function(req,res){
    res.render("books",{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
        title:'Library',
        books //THIS IS BOOKS ARRAY
    });
});

 booksRouter.get('/:id',function(req,res){
     const id = req.params.id
     res.render('book',{
        nav : [{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/login',name:'LOGIN'},{link:'/signup',name:'SIGNUP'}],
        title:'Library', 
        book:books[id]
     });
 });

 
 
 
 
 
 
 module.exports=booksRouter;
