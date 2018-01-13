var content = document.getElementById("content");
var button = document.getElementById("show-more");

button.onclick = function(){
    
    if(content.className == "open"){
        content.className="close";
         document.getElementById("show-more").innerHTML="Show more";
        
    } else{
        content.className="open";
        document.getElementById("show-more").innerHTML="Show less";
        
    }
    
};