        function Calculate()
{
    var Value;
    var CorrectType;
    
    document.getElementById("message").innerHTML = "";
    Value= document.getElementById("myValue").value;
    CorrectType = Checkstring(Value);
    if(CorrectType == true)
        { document.getElementById("message").innerHTML = "V-Dif";
        document.getElementById("myValue").value = "";}
    else
       { document.getElementById("message").innerHTML = "Unknown";
        document.getElementById("myValue").value = "";} 
       
}

function Checkstring(Value)
{
    
    
    var Correct = false;
   
    if (Value.toUpperCase() == "CORNER CHIMNEY")<!-- Checks if target contains following phrase in caps or lowercase as True or False -->
        {   
            Correct = true;
        }
 
    return Correct;
}