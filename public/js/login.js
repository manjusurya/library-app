function validate()
{
 var em=document.getElementById("email").value;
var p=document.getElementById("password").value;

    if (em=="") {
        alert("enter email id");
        return false;
    }
    else if (em.indexOf("@")<=0) {
        alert(" invalid email id");
        return false;
        
    }
    else if (em.charAt(em.length-4)!=".") {
        alert("invalid email id");
        return false;
        
    }
    else if (p=="") {
        alert("please enter password");
        return false;
        
    }
    else{
        alert("successfully logged in");
    }
    return true;
}