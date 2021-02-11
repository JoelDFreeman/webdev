

function Route()
{
    var RoutesArray = new Array();
    var RouteList = new Array();
    var Found=false, Item;
    var Index, Search;
    var Route;
    var Message=""
    
    RoutesArray[0] ="Cadshaw - Corner Chimney";
    RoutesArray[1] ="Cadshaw2 - Oak Tree Chimney";
    RoutesArray[2] ="Cadshaw3 - Crack and Wall";
    RoutesArray[3] ="Wilton1 - Born Slippy";
    RoutesArray[4] ="Wilton2 - Spec Crack";
    RoutesArray[5] ="Wilton3 - Laid Back";
    
    
    Search = document.getElementById("Route").value;
    
    Index = 0
    
    for (Index=0;Index < RoutesArray.length;Index++)
        {
            Item = RoutesArray[Index];
            if (Item.substring(0,7)=="Cadshaw" && Search == "Cadshaw")//check array by length variable 0-->7
                {
                    Route = Item.substring(3,Item.length+1);
                    RouteList.push(Item); 
                }
            if (Item.substring(0,6)=="Wilton" && Search=="Wilton")//check array by length variable 0-->6
                {
                    Route = Item.substring(5,Item.length+1);
                    RouteList.push(Item);                 
                }
       
        }
    for (var i=0;i<RouteList.length;i++)//check array by variable RouteList
        {
            Message = Message + RouteList[i]+"<br>"
        }


    document.getElementById("information").innerHTML=Message;
  
    
}

