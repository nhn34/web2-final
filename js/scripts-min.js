var $burger=$("#burger-container"),$nav=$("nav[data-nav]"),$navA=$("nav[data-nav] a"),isVisible=!1;function mouseClick(){console.log("click"),!1===isVisible?($nav.show(),isVisible=!0):($nav.hide(),isVisible=!1)}$burger.on("click",mouseClick),$navA.on("click",mouseClick);var $topLine=$("#burger-container div:nth-child(1)"),$middleLine=$("#burger-container div:nth-child(2)"),$bottomLine=$("#burger-container div:nth-child(3)"),$burgerContainer=$("#burger-container"),animationSpeed=.25,ifClicked=!1;function burgerClick(){console.log("clicks"),!1===ifClicked?(TweenMax.to($topLine,animationSpeed,{rotation:45,y:10}),TweenMax.to($middleLine,animationSpeed,{alpha:0,scaleX:0}),TweenMax.to($bottomLine,animationSpeed,{rotation:-45,y:-10}),ifClicked=!0):(TweenMax.to($topLine,animationSpeed,{rotation:0,y:0}),TweenMax.to($middleLine,animationSpeed,{alpha:1,scaleX:1}),TweenMax.to($bottomLine,animationSpeed,{rotation:0,y:0}),ifClicked=!1)}$burgerContainer.on("click",burgerClick);