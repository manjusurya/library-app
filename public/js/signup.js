function validate(){
    var n=document.getElementById("name").value;
    var db=document.getElementById("dob").value;
    var add=document.getElementById("address").value;
    var em=document.getElementById("email").value;
    var ph=document.getElementById("phone").value;
    var p1=document.getElementById("password1").value;
    var p2=document.getElementById("password2").value;
    
    
    if (n=="") {
        alert("please enter your name");
        return false;
        
    }
    else if (db=="") {
        alert("please enter your date of birth");
        return false;
        
    }
    else if (add=="") {
        alert("please enter your address");
        return false;
        
    }
    else if (em=="") {
        alert("please enter your email id");
        return false;
        
    }
    else if (em.indexOf("@")<=0) {
        alert("invalid email id");
        return false;
        
    }
    else if (em.charAt(em.length-4)!=".") {
        alert("invalid email id");
        return false;
        
    }
    else if (ph=="") {
        alert("enter your phone number");
        return false;
        
    }
    else if (p1=="") {
        alert("enter your password");
        return false;
        
    }
    else if (p1.length<=4) {
        alert("password is weak");
        return false;
    
        
    }
    else if (p1.length<=7) {
        alert("password not strong");
        return false;
        
    }
    else if(p1!=p2){
        alert("PASSWORD MISMATCH");
        return false;
    }
    else{
        alert("successfully signed up")
      
    }
    
    return true;
    
    }