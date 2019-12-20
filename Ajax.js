function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        
        var result = JSON.parse(this.responseText);

        document.getElementById("demo").innerHTML = " Sunrise "　+ " at " + result.results.sunrise + " <br> " + " Sunset " + " at " + result.results.sunset;
      }
    };
    xhttp.open("GET", "https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400", true);
    xhttp.send();
  }


/*
Code for the local storage
*/

function additem(){
  var newItem = document.createElement("div");
  newItem.innerHTML = document.getElementById("box").value;
  newItem.onclick = removeItem;
  document.getElementById("list").appendChild(newItem);
  saveList();
}
function removeItem(item){
  document.getElementById("list").removeChild(this);
  saveList();
}

function saveList(){
  localStorage.storedList = document.getElementById("list").innerHTML;
}

function loadList(){
  document.getElementById("list").innerHTML = localStorage.storedList;
  for(var i = 0; i < list.children.length; i++){
    list.children[i].onclick = removeItem;
  }
}

if(localStorage.storedList){
  loadList();
}





  function applySleep() {
  
    var dayOfWeek = new Date().getDay();
    var month = new Date().getMonth();
    var dayOfMonth = new Date().getDate();
    var year = new Date().getFullYear();
    
var Months = ['January', 'Febrary', 'March', 'April', 'May', 'Jun', 'July',
'August', 'September', 'October', 'November', 'December'];


    if (month == 11 && dayOfMonth == 18 || month == 11 && dayOfMonth == 19 || month == 11 && dayOfMonth == 26){
    text = ("To day " + Months[month] + ", " + dayOfMonth + " "+ "Do not Sowing and Planting: <br> MOON IS NOT IN THE RIGHT POSITION");
    }
    else if (dayOfMonth == 20 || dayOfMonth == 21 || dayOfMonth == 23) {
    text = ("TO DAY " + Months[month] + " " + dayOfMonth + ", " + year + " " + "FULL MOON <br> Sowing and planting")
    }
    else { 
    text = "TO DAY " + Months[month] + " " + dayOfMonth + "," + year + " " + "YOU CAN WORK!!!"
    }
    
    document.getElementById('outputDiv').innerHTML = text;
    }
