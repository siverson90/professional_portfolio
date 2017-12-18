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
      name : "MySQL",
      image : "images/mysql.png",
    },
    {
      name : "Handlebars",
      image : "images/handlebars.png",
    },
    {
      name : "Sequalize",
      image : "images/sequalize.png",
    },
    {
      name : "Express.js",
      image : "images/express.png",
    },
    {
      name : "MongoDB",
      image : "images/mongodb.png",
    },
    {
      name : "Mongoose",
      image : "images/mongoose.png",
    },
    {
      name : "React.js",
      image : "images/react.png",
    }
  ]

  var projects = [
    {
      Name : "Cali.cool",
      Descritption : "Cali.cool is a photo sharing MERN-stack app for Californians by Californians, a visual platform for sharing the California experience. The collection of photographs is open for public viewing, but requires a login to begin sharing photos.",
      Image : "images/calicool.png",
      imageLink: "http://cali.cool/",
      languagesUsed: "MongoDB, Express, React.js, Node.js, Passport.js, NPM's, Heroku, MLab, PointDNS, Cloudinary API, Axios"
    },
    {
      Name : "Alcohol-event-planner",
      Descritption : "Full stack app which provides recommendations to users based on event they are planning to attend through a currated list",
      Image : "images/drinks.jpg",
      imageLink: "https://alcohol-event-planner.herokuapp.com/",
      languagesUsed: "Exress.js, Node.js, Handlebars, MySQL, NPM, jQuery",
    },
    {
      Name: "Bored on a Friday",
      Descritption: "Web app providing event/concert recommendations to users in their geographical area happening on the day they search",
      Image: "images/fun.jpg",
      imageLink: "https://jwong1219.github.io/Bored-Friday-Fun-Finder/",
      languagesUsed: "HTML, CSS, jQuery, Firebase, Eventbrite API, Ticketmaster API"
    }
  ];

  // console.log(projects[0].languagesUsed[0].image)

  // console.log(projects);
  // Profile picture, bio and interests
 
  var hobbyCounter=0;
  var myVar = setInterval(renderHobby, 3000);

  function renderHobby() {
      
      if( hobbyCounter < hobbbiesArray.length) {
        $("#rotation-phrases").text(hobbbiesArray[hobbyCounter]);
        // console.log(hobbbiesArray[hobbyCounter]);
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
    // console.log(element);
    var carouselDiv = $("<div>");
    var rowDiv = $("<div>").addClass("row");
    var leftBumperDiv = $("<div>").addClass("col-md-1")
    var rightBumperDiv = $("<div>").addClass("col-md-1") 
    var pDiv = $("<div>").addClass("col-md-6");
    var imageDiv = $("<div>").addClass("col-md-4");
    var projectName = $("<p>");
    var projectDes = $("<p>");
    var languagesP = $("<p>");
    var projectImage = $("<img>");
    var imageAHref = $("<a>").attr("href", element.imageLink);
  
    languagesP.text(element.languagesUsed);
    projectName.text(element.Name);
    projectDes.text(element.Descritption);
    projectImage.attr("src", element.Image);
    projectImage.attr("alt", "="+element.Name);
    projectImage.addClass("d-block img-fluid carousel-image");
    
    imageAHref.append(projectImage);
    imageDiv.append(imageAHref);

    pDiv.append(projectName);
    pDiv.append(projectDes);
    pDiv.append(languagesP);

    rowDiv.append(leftBumperDiv);
    rowDiv.append(pDiv);
    rowDiv.append(imageDiv);
    rowDiv.append(rightBumperDiv);

    carouselDiv.append(rowDiv);
    carouselDiv.addClass("carousel-item")
    $(".carousel-inner").append(carouselDiv);

    addActiveToImage();
  })

  function addActiveToImage(){
    $(".carousel-item:eq(1)").addClass("active");
  }


  // Download Resume
  // $('#resume').click(function(event) {
  //   event.preventDefault();
  //   window.open("/api/resume");
  // });

  // Iterate through array of objects to render languages learned

  languages.forEach(function(element){
    var bootstrapDiv = $("<div>").addClass("col-md-2 align-self-center");
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

