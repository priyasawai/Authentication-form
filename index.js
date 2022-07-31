function validate()
{
    var username=document.getElementById("username").value;
    var passoword=document.getElementById("password").value;
    if(username=="admin" && passoword=="user")
    {
        alert("login successful");
    }
    else{
        alert("login fail");
    }
}