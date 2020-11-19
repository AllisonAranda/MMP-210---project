let pageNum = 1; //declare a variable to hold current page number (current state)
let numPages = 7; //declare a variable to hold total number of pages (states)

let img;
let img0;
let img1;
let img2;
let img3;
let img4;
let img5;

function preload(){
  img=loadImage("sky.jpg");
  img0=loadImage("ok.png");
  img1=loadImage("ok1.png");
  img2=loadImage("ok2.png");
  img3=loadImage("ok3.png");
  img4=loadImage("ok4.png");
  img5=loadImage("ok5.png");
  img6=loadImage("ok6.png");
  img7=loadImage("okmi.png");
  
}

function setup() {
  createCanvas(400, 400);
  console.log(pageNum); //during setup, print current page (zero)
}

function draw() {
  
  //display something different on the canvas depending on current page (current state)
  if (pageNum == 1){
    background(img);
    image(img0, 20,190, 200, 200);
    image(img1, 250,40,80,120);
  }
  else if (pageNum == 2){
    background(img);
    image(img1, 220,50,80,120);
    image(img2, 80,190, 200, 200);
  }
  else if (pageNum == 3){
     background(img);
     image(img1, 100,100,80,120);
     image(img3, 180,190, 200, 200);
  }
  else if (pageNum == 4){
      background(img);
     image(img1, 250,210,80,120);
     image(img4, 10,60, 200, 200);
  }
  else if (pageNum == 5){
    background(img);
    image(img1, 230,150,80,120);
    image(img5, 170,150, 80, 150);
  }
  else if (pageNum == 6){
    background(img);
    image(img7, 240,180,40,60);
    image(img5, 170,150, 80, 150);
  }
  else if (pageNum == 7){
    background(img);
    text("you won the lottery!", 250,350 );
    image(img6,55,85,290,180);
  }
  
}

//mousePressed() function will run each time the mouse is clicked
function mousePressed(){
  //if the numerical value of the current page is less than the total number of pages, we can increment the pageNum variable's value and move to the next page
  if (pageNum < numPages){
    pageNum++;
  }
  
  //otherwise, reset to first page
  else{
    pageNum = 1;
  }
  
  //after each click, print the current page number to the console
  console.log(pageNum);
}
