//Beat Machine
//By. Gene Park

//This project's objectives are:
//To teach the user how trap beats are made.
//To give the user a simplified digital audio experience (DAW) 
//To give a platform for users to make music

//There will be rows of rectangles. Each row represents a different instrument. There are 5 instruments- A simple synth, hihats, bassdrum, snaredrums, and 808 Bass. The user will be able to experiment with it and make a beat of their own. 

//Guidelines: Making a repeating pattern. Essentially, you need to press on the mouse in the rectangle for the instrument to make a sound in that specific spot of the beat. For the hihats, bassdrum, and snaredrums, you do not need to worry about pressing keys. For pitched instruments however you will have to press the note you want the rectangle to have and then press the rectangle. 

//Synth
//hihats
//bassdrum
//snares
//808 Bass

//Making the arrays. The number represents the number of rectangles. The more rectangles, the more intricate the pattern can get. 
var melody = new Array(16)
var bass_melody = new Array(16)
var hihats = new Array(32)
var bassdrum = new Array(16)
var snaredrum = new Array(16)

let beat = 0  //the variable that dictates the whole repitition

function setup() {
  createCanvas(1920, 1080)
  frameRate(25) //framerate is 25. Changing this will change the bpm
  
  //loading huge amounts of sounds. 
  hi_hats = loadSound('sounds/hihats.wav');
  bd = loadSound('sounds/bd.wav');
  sd = loadSound('sounds/sn.wav');
  
  bass_a = loadSound('sounds/A.wav')
  bass_b = loadSound('sounds/B.wav')
  bass_c = loadSound('sounds/C.wav')
  bass_d = loadSound('sounds/D.wav')
  bass_e = loadSound('sounds/E.wav')
  bass_f = loadSound('sounds/F.wav')
  bass_g = loadSound('sounds/G.wav')

  
  mel_a = loadSound('sounds/M-A.wav')
  mel_b = loadSound('sounds/M-B.wav')
  mel_c = loadSound('sounds/M-C.wav')
  mel_d = loadSound('sounds/M-D.wav')
  mel_e = loadSound('sounds/M-E.wav')
  mel_f = loadSound('sounds/M-F.wav')
  mel_g = loadSound('sounds/M-G.wav')
  
  
  //variables for rectangles location
  start = 150
  h1 =50
  //for synth
  for(i= 0 ; i < melody.length; i++) {
    melody[i] = new Melody(start, h1, 70);
    start += 70 //big rectangles compared to hihats
  }
  
  //for hihats
  start = 150
  for(i= 0 ; i < hihats.length; i++) {
    hihats[i] = new HiHats(start, 150, 35);
    start += 35 //smaller rectangles for intricacy
  }
  //for bassdrum
  start = 150 
  for(i= 0 ; i < bassdrum.length; i++) {
    bassdrum[i] = new BassDrum(start, 190, 70 );
    start += 70
  }
  //for snaredrum
  start = 150
  for(i= 0 ; i < snaredrum.length; i++) {
    snaredrum[i] = new SnareDrum(start, 260, 70);
    start += 70
  }
  //for 808bass
  start = 150
  for(i= 0 ; i < bass_melody.length; i++) {
    bass_melody[i] = new BassMelody(start, 330, 70);
    start += 70
  }
  
  
  
}

function draw() {
  
  background(128); //grey background color for now. 
  fill(225) //filling color with white. 
  
  strokeWeight(3)
  
  stroke(0)
  
  //in order to save time and energy for this program, using one for loop seemed smart. Displaying and updating all the instruments. 
  for(i= 0 ; i < hihats.length; i++) {
    if(i % 2 ==0) {
      melody[i/2].display()
      melody[i/2].update()
      bass_melody[i/2].display()
      bass_melody[i/2].update()
      bassdrum[i/2].display()
      bassdrum[i/2].update()
      snaredrum[i/2].display()
      snaredrum[i/2].update()
    }
    hihats[i].display()
    hihats[i].update()
  }
  //beat is set to 128. This is because if we want a fast framerate, which is needed so that the rectangles can be clicked, we also need more time for the cadence. Or else it will be too fast, making it inaudible. Therefore, these modular variables are needed. 
  if(beat % 4 == 0){
    if(hihats[beat/4].on == true) {
      hi_hats.play();
    }
    // ".on" is used to see if they are on or not. If they are, they are played. 
  }
  //same algorithm for everything else. 
  if(beat % 8 == 0){
    if(bassdrum[beat/8].on == true) {
      bd.play();
    }
      
  }
  if(beat % 8 == 0){
    if(snaredrum[beat/8].on == true) {
      sd.play();
    }
  }
    
  if(beat % 8 == 0){
    if(melody[beat/8].on == true) {
      melody[beat/8].note.play()
      //the note is being played. 
    }
  }
  if(beat % 8 == 0){
    if(bass_melody[beat/8].on == true) {
      bass_melody[beat/8].note.play()
      //the note is being played.
    }   
  }
  
  


  beat += 1 //increasing the beat
  if(beat == 128) {
    beat = 0 //repeating over and over. 
  }
strokeWeight(3)
fill(0,0,255)
stroke(255,0,0)

line(150,50,150,430)
line(430,50,430,430)
line(710,50,710,430)
line(990,50,990,430)
line(1270,50,1270,430)


fill(225)
stroke(255,0,0)


text("Synth", 70, 120)
text("hihats", 70, 170)
text("bassdrum", 70, 230)
text("snares", 70, 300)
text("808 Bass", 70, 380)

stroke(255)
fill(255,0,0)
rect(250,450,20,20)
text("A =",225,465 )

fill(128,0,128)
rect(250,470,20,20)
text("B =",225,485 )

fill(255,0,255)
rect(250,490,20,20)
text("C =",225,505 )

fill(0,128,0)
rect(250,510,20,20)
text("D =",225,525 )

fill(0,255,0)
rect(250,530,20,20)
text("E =",225,545 )

fill(128,128,0)
rect(250,550,20,20)
text("F =",225,565 )

fill(255,255,0)
rect(250,570,20,20)
text("G=",225,585 )



  
  
  

  

}

class Melody {
  constructor(w1, h1, num) {
    this.on = false  //set to false at first
    this.w1 = w1  //starting location for the rectangle. 
    this.h1 = h1 //height
    this.num = num //width of the rectangle. 
    this.num1 = this.num + 30 //height for rectangle. 
    this.note = null //note is null till its set 
    this.col = null
    
  }
  
  display() {
    if(this.on == true) {//if clicked, turns color to blue
      fill(this.col[0],this.col[1],this.col[2])
      rect(this.w1, this.h1, this.num, this.num1 )
      
    }
    if(this.on == false) {
      fill(255) //if clicked again, it turns white
      rect(this.w1, this.h1, this.num, this.num1 )
    }
  }
  

  update() { //many conditionals are needed to see if the mouse is clicked and in the rectangle. 

    if(((mouseIsPressed &&  mouseX > this.w1 && mouseX < this.w1 + this.num) && (mouseY > this.h1 && mouseY < this.h1 + this.num1 ))) {
      
    
      if(this.on == false && key == 'a') {
        this.on =true
        this.note = mel_a
        this.col = [255,0,0]
      }
      else if(this.on == false && key == 'b') {
        this.on =true
        
        this.note = mel_b
        this.col = [128,0,128]
      }
      else if(this.on == false && key == 'c') {
        this.on =true
        this.note = mel_c
        this.col = [255,0,255]
      }
      else if(this.on == false && key == 'd') {
        this.on =true
        this.note = mel_d
        this.col = [0,128,0]
        
      }
      else if(this.on == false && key == 'e') {
        this.on =true
        this.note = mel_e
        this.col = [0,255,0]
      }
      else if(this.on == false && key == 'f') {
        this.on =true
        this.note = mel_f
        this.col = [128,128,0]
      }
      else if(this.on == false && key == 'g') {
        this.on =true
        this.note = mel_g
        this.col = [255,255,0]
      }
      
      else {
        this.on = false
        this.note = null
        
      }
    
    }
    
    
    
  }
  
}
//same algorithm applies. 
class BassMelody {
  constructor(w1, h1, num) {
    this.on = false 
    this.w1 = w1 
    this.h1 = h1
    this.num = num
    this.num1 = this.num + 30
    this.note = null
    this.col = null
    
  }
  
  display() {
    if(this.on == true) {
      fill((this.col[0]),this.col[1],this.col[2])
      rect(this.w1, this.h1, this.num, this.num1 )
      
    }
    if(this.on == false) {
      fill(255)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
  }a
  

  update() {
    if(((mouseIsPressed &&  mouseX > this.w1 && mouseX < this.w1 + this.num) && (mouseY > this.h1 && mouseY < this.h1 + this.num1 ))) {
      
      if(this.on == false && key == 'a') {
        this.on =true
        this.note = bass_a
        this.col = [255,0,0]
      }
      else if(this.on == false && key == 'b') {
        this.on =true
        
        this.note = bass_b
        this.col = [128,0,128]
      }
      else if(this.on == false && key == 'c') {
        this.on =true
        this.note = bass_c
        this.col = [255,0,255]
      }
      else if(this.on == false && key == 'd') {
        this.on =true
        this.note = bass_d
        this.col = [0,128,0]
        
      }
      else if(this.on == false && key == 'e') {
        this.on =true
        this.note = bass_f
        this.col = [0,255,0]
      }
      else if(this.on == false && key == 'f') {
        this.on =true
        this.note = bass_g
        this.col = [128,128,0]
      }
      else if(this.on == false && key == 'g') {
        this.on =true
        this.note = bass_f
        this.col = [255,255,0]
      }
      
      else {
        this.on = false
        this.note = null
        
      }
    
    }
    
    
  }
}
//same algorithm applies. 
class HiHats {
  constructor(w1, h1, num) {
    this.on = false 
    this.w1 = w1 
    this.h1 = h1
    this.num = num
    this.num1 = this.num + 15
  }
  
  display() {
    if(this.on == true) {
      fill(100,149,237)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
    if(this.on == false) {
      fill(255)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
  }
  update() {
    if(mouseIsPressed && ((mouseX > this.w1 && mouseX < this.w1 + this.num) && (mouseY > this.h1 && mouseY < this.h1 + this.num1 ))) {
      if(this.on == false) {
        this.on = true
      }
      else {
        this.on= false
      }
    }
  }
}

//same algorithm applies. 
class BassDrum {
  constructor(w1, h1, num) {
    this.on = false 
    this.w1 = w1 
    this.h1 = h1
    this.num = num
    this.num1 = this.num + 15
  }
  
  display() {
    if(this.on == true) {
      fill(100,149,237)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
    if(this.on == false) {
      fill(255)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
  }
  update() {
    if(mouseIsPressed && ((mouseX > this.w1 && mouseX < this.w1 + this.num) && (mouseY > this.h1 && mouseY < this.h1 + this.num1 ))) {
      if(this.on == false) {
        this.on = true
      }
      else {
        this.on= false
      }
    }
  }
}
//same algorithm applies. 
class SnareDrum {
  constructor(w1, h1, num) {
    this.on = false 
    this.w1 = w1 
    this.h1 = h1
    this.num = num
    this.num1 = this.num + 15
  }
  
  display() {
    if(this.on == true) {
      fill(100,149,237)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
    if(this.on == false) {
      fill(255)
      rect(this.w1, this.h1, this.num, this.num1 )
    }
  }
  update() {
    if(mouseIsPressed && ((mouseX > this.w1 && mouseX < this.w1 + this.num) && (mouseY > this.h1 && mouseY < this.h1 + this.num1 ))) {
      if(this.on == false) {
        this.on = true
      }
      else {
        this.on= false
      }
    }
  }
}