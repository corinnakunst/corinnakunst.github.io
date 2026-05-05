//Augen
let scrollanfangauge = 0.1 * window.innerHeight;
let scrollendeauge = 0.5* window.innerHeight;

let scrollanfangaugeich = 0.5 * window.innerHeight;
let scrollendeaugeich = 1.05*window.innerHeight;

let augengrosse = window.innerWidth/8;
let augenXich = window.innerWidth * 0.05 + augengrosse *1.05;
let augenX = window.innerWidth * 0.95 - augengrosse* 1.05;
let puppilengrosse = augengrosse * 0.5;

let pupilOffset;
let scrollRatio;

const meetEl = document.querySelector('.meetpoint');
const meetBottom = meetEl.offsetTop + meetEl.offsetHeight;
const remainingScrollHeightmeetpoint = document.body.scrollHeight - meetBottom;

const exitEl = document.querySelector('.exitpoint');
const exitBottom = exitEl.offsetTop + exitEl.offsetHeight;
const remainingScrollHeightexitpoint = document.body.scrollHeight - exitBottom;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

// onresize = (event) => {
//     resizeCanvas(window.innerWidth, window.innerHeight);

//     scrollanfangauge = 0.1 * window.innerHeight;
//     scrollendeauge = 0.5* window.innerHeight;

//     scrollanfangaugeich = 0.5 * window.innerHeight;
//     scrollendeaugeich = 1.05*window.innerHeight;

//     augengrosse = window.innerWidth/8;
//     augenXich = window.innerWidth * 0.05 + augengrosse *1.05;
//     augenX = window.innerWidth * 0.95 - augengrosse* 1.05;
//     puppilengrosse = augengrosse * 0.5;

//     pupilOffset;
//     scrollRatio;

// }

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
  scrollanfangauge = 0.1 * window.innerHeight;
    scrollendeauge = 0.5* window.innerHeight;

    scrollanfangaugeich = 0.5 * window.innerHeight;
    scrollendeaugeich = 1.05*window.innerHeight;

    augengrosse = window.innerWidth/8;
    augenXich = window.innerWidth * 0.05 + augengrosse *1.05;
    augenX = window.innerWidth * 0.95 - augengrosse* 1.05;
    puppilengrosse = augengrosse * 0.5;
}

// function resize(){
//   createCanvas(window.innerWidth, window.innerHeight)
// }

function draw() {
clear();

 if (window.scrollY < meetBottom){
    scrollRatio = constrain(window.scrollY / (document.body.scrollHeight - (window.innerHeight)-(remainingScrollHeightmeetpoint)), 0, 1);
    
 } else if (window.scrollY < exitBottom) {
    scrollRatio = 1;
    
 } else {
    let exitProgress = map(window.scrollY, exitBottom, document.body.scrollHeight - window.innerHeight, 0, 1);
    scrollRatio = 1 - exitProgress;
 } 


  let maus = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
  let y = map (sin(maus), 1 ,-1 , scrollanfangauge, scrollendeauge);

  let mausandererichtung = map (scrollRatio, 0, 1, HALF_PI, -HALF_PI);
  let yanders = map (sin(mausandererichtung), -1 ,1 , scrollanfangaugeich, scrollendeaugeich);
  drawEyes(y, yanders);
}

function drawEyes( y, yanders) {
    pupilOffset = puppilengrosse * 0.4;


    pupilOffset = map(window.scrollY, 0, (document.body.scrollHeight - (windowHeight)-(remainingScrollHeightmeetpoint)), - puppilengrosse * 0.35 , puppilengrosse * 0.35);
     let xpupil= min (pupilOffset,  puppilengrosse * 0.3)

    push()
  
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  
  noFill();
  ellipse(augenX - augengrosse * 0.55, y, augengrosse);
  ellipse(augenX + augengrosse * 0.55, y, augengrosse);

  fill(0);
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'black';
  ellipse(augenX - puppilengrosse * 1.1 - xpupil, y, puppilengrosse, puppilengrosse);
  ellipse(augenX + puppilengrosse * 1.1 - xpupil, y, puppilengrosse, puppilengrosse);
  pop()
  
  push()
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';

  noFill();
  ellipse(augenXich - augengrosse * 0.55, yanders, augengrosse);
  ellipse(augenXich + augengrosse * 0.55, yanders, augengrosse);
  
  drawingContext.shadowOffsetX = 0;
  drawingContext.shadowOffsetY = 0;
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = 'black';
  fill(0);
  ellipse(augenXich - puppilengrosse * 1.1 - xpupil * -1, yanders, puppilengrosse, puppilengrosse);
  ellipse(augenXich + puppilengrosse * 1.1 - xpupil * -1, yanders, puppilengrosse, puppilengrosse);
  pop()
  }

  const buttonmouse = document.getElementById("buttonmouse");
  const screens = document.querySelectorAll(".contentscreen");

screens.forEach(screen => {
  screen.addEventListener("mouseenter", () => {
    buttonmouse.style.visibility = "visible";
  });
  screen.addEventListener("mouseleave", () => {
    buttonmouse.style.visibility = "hidden";
  });
});

  document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    buttonmouse.style.left = x + "px";
    buttonmouse.style.top = y + "px";
    // buttonmouse.textContent = `X: ${x} | Y: ${y}`;
  });

  