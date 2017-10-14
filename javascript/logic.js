

$( document ).ready(function() {
  var hobbbiesArray = [ 
  "Crossfit", 
  "travel internationally", 
  "eat Japanese Ramen", 
  "attend tech meetups", 
  "listen to podcasts",
  "attend coffee tastings",
  ];
  
  var hobbyCounter=0;
  var myVar = setInterval(renderHobby, 3000);

function renderHobby() {
    
    if( hobbyCounter < hobbbiesArray.length) {
      $("#rotation-phrases").text(hobbbiesArray[hobbyCounter]);
      console.log(hobbbiesArray[hobbyCounter]);
      hobbyCounter ++;
    }
    else {
      hobbyCounter = 0;
    }
    
}

});
