    function Validation()
{
    var Value;
    var CorrectType;
    
    document.getElementById("message").innerHTML = "";
    Value= document.getElementById("myValue").value;
    CorrectType = Checkstring(Value);
    if(CorrectType == true)
        { document.getElementById("message").innerHTML = "Well Done";
        document.getElementById("myValue").value = "";}
    else
       { document.getElementById("message").innerHTML = "Try Again";
        document.getElementById("myValue").value = "";} 
       
}

function Checkstring(Value)
{
    
    
    var Correct = false;
   
    if (Value.toUpperCase() == "DONE")
        {   
            Correct = true;
        }
 
    return Correct;
}
// to uppercase from https://www.w3schools.com/jsref/jsref_touppercase.asp