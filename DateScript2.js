function DateHandling()
{
    var DateOfBirth;
    var Day;
    var Month;
    var Year;
    var DateString;
	
    DateString = prompt("Enter date of your of ascent in format dd/mm/yyyy");
    Day = DateString.substring(0,2); //get dd from date
    Month = DateString.substring(3,5);
    Year = DateString.substring(6,10);
    
    document.write(Day+"."+Month+"."+Year+"<br>");
    document.write("Day: " + parseInt(Day)+"<br>");
    document.write("Month: " + parseInt(Month)+"<br>");
    document.write("Year: " +parseInt(Year)+"<br>");
      
    
    //Create Date using new Date
    DateOfBirth = new Date(parseInt(Year),parseInt(Month)-1,parseInt(Day));
    var Month = DateOfBirth.getMonth()+1
	
    
    
    Age = AgeCalculation(DateOfBirth);
    
	document.write("Years Since Climb: "+Age);
	Age=Age+1
	
}

function AgeCalculation(BirthDate)
{
    var Today = new Date();
    
    var Tdd = Today.getDate();
    var Tmm = Today.getMonth()+1;
    var Tyyyy = Today.getFullYear();
    
    var Bdd = BirthDate.getDate();
    var Bmm = BirthDate.getMonth() +1;
    var Byyyy = BirthDate.getFullYear();
    
    
    var Age = Tyyyy - Byyyy;
    
    if (Bmm > Tmm)
        { Age = Age -1;}
    else if(Bmm == Tmm)
        { if (Bdd > Tdd)
            {
                Age = Age -1;
            }
        }
    
    return (Age);//Sum created from above IF statement
	
	

}