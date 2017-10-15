$( document ).ready(function() {
  
  // Arrays and Arrays of Objects
  var hobbbiesArray = [ 
    "Crossfit", 
    "travel internationally", 
    "eat Japanese Ramen", 
    "attend tech meetups", 
    "listen to podcasts",
    "attend coffee tastings",
  ];

  var projects = [
    {
      Name : "Liri Bot",
      Descritption : "This project was great",
      Image : "images/robot.png",
      imageLink: "https://github.com/siverson90/LIRI-Bot",
    },
    {
      Name : "Train Schedule",
      Descritption : "This project was great",
      Image : "images/train.jpg",
      imageLink: "https://github.com/siverson90/LIRI-Bot",
    },
    {
      Name: "Bored on a Friday",
      Descritption: "This project was great",
      Image: "images/fun.jpg",
      imageLink: "https://github.com/siverson90/LIRI-Bot",
    }
  ];

  var languages = [
    {
      name : "HTML",
      image : "images/html5.png",
    },
    {
      name : "CSS",
      image : "images/css3.png",
    },
    {
      name : "Javascript",
      image : "images/javascript.png",
    },
    {
      name : "Jquery",
      image : "images/jquery.png",
    },
    {
      name : "Node.JS",
      image : "images/nodejs.png",
    },
    {
      name : "Bootstrap",
      image : "images/bootstrap.png",
    }
  ]

  // Profile picture, bio and interests
 
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

  $('.carousel').carousel({
    interval: 4000
  })

  // Projects

  projects.forEach(function(element) {
    var carouselDiv = $("<div>");
    var rowDiv = $("<div>").addClass("row");
    var pDiv = $("<div>").addClass("col-md-6");
    var imageDiv = $("<div>").addClass("col-md-4");
    var projectName = $("<p>");
    var projectDes = $("<p>");
    var projectImage = $("<img>");
    var imageAHref = $("<a>").attr("href", element.imageLink);
  
    projectName.text(element.Name);
    projectDes.text(element.Descritption);
    projectImage.attr("src", element.Image);
    projectImage.attr("alt", "="+element.Name);
    projectImage.addClass("d-block img-fluid carousel-image");
    
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

  // Resume, langaues and Social

  // add onclick event listener and allow user to download resume
  $('#resume').click(function(event) {
    event.preventDefault();  //stop the browser from following
    window.location.href = '../Resume_Josh_Siverson.pdf';
  });

  // Iterate through array of objects to render languages learned
  languages.forEach(function(element){
    var bootstrapDiv = $("<div>").addClass("col-md-4");
    var img = $("<img>").addClass("img-fluid language-logo rounded");
    img.attr("src", element.image);
    img.attr("alt", element.name);

    bootstrapDiv.append(img);
    $("#logos-row").append(bootstrapDiv);

  })

  $(".language-logo").mouseover(function(){
    $(this).addClass("animated shake");
  })

  $(".language-logo").mouseleave(function(){
    $(this).removeClass("animated shake");
  })

});

