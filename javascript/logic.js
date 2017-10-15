$( document ).ready(function() {
  
  $('.carousel').carousel({
  // interval: 4000
  })

  var hobbbiesArray = [ 
  "Crossfit", 
  "travel internationally", 
  "eat Japanese Ramen", 
  "attend tech meetups", 
  "listen to podcasts",
  "attend coffee tastings",
  ];
  
  var hobbyCounter=0;
  // var myVar = setInterval(renderHobby, 3000);

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

  // add onclick event listener and allow user to download resume
  $('#resume').click(function(event) {
    event.preventDefault();  //stop the browser from following
    window.location.href = '../Resume_Josh_Siverson.pdf';
  });


  // Create object of project to iterate through and render to screen

  var projects = [
  {
    Name : "Liri Bot",
    Descritption : "This project was great",
    Image : "images/fun.jpg",
    imageLink: "https://github.com/siverson90/LIRI-Bot",
  },
  {
    Name : "Train Schedule",
    Descritption : "This project was great",
    Image : "images/fun.jpg",
    imageLink: "https://github.com/siverson90/LIRI-Bot",
  },
  {
    Name: "Bored on a Friday",
    Descritption: "This project was great",
    Image: "images/fun.jpg",
    imageLink: "https://github.com/siverson90/LIRI-Bot",
  }
  ];

  projects.forEach(function(element) {
    var carouselDiv = $("<div>");
    var rowDiv = $("<div>");
    var pDiv = $("<div>").addClass("col-md-4");
    var imageDiv = $("<div>").addClass("col-md-8");
    var projectName = $("<p>");
    var projectDes = $("<p>");
    var projectImage = $("<img>");
    var imageAHref = $("<a>").attr("href", element.imageLink);
  
    projectName.text(element.Name);
    projectDes.text(element.Descritption);
    projectImage.attr("src", element.Image);
    projectImage.attr("alt", "="+element.Name);
    projectImage.addClass("d-block img-fluid");
    
    imageAHref.append(projectImage);
    imageDiv.append(imageAHref);

    pDiv.append(projectName);
    pDiv.append(projectDes);

    rowDiv.append(pDiv);
    rowDiv.append(imageDiv);

    carouselDiv.append(rowDiv);
    carouselDiv.addClass("carousel-item")
    $(".carousel-inner").append(carouselDiv);

    addActiveToImage();
  })

  function addActiveToImage(){
    $(".carousel-item:eq(1)").addClass("active");
  }

// <div class="carousel-item active">
//       <div class="row">
//          <!-- wraps write up about project and image -->
//         <div class="col-md-4">
//           <p>This project was great!</p>
//         </div>
//         <div class="col-md-8">
//           <a href="https://github.com/siverson90/LIRI-Bot">
//            <img class="d-block img-fluid" src="images/fun.jpg" alt="First slide">
//           </a>
//         </div>
//       </div>
//     </div>
});
