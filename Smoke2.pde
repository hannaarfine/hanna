int n=400;
float minRad = 0;
float maxRad = 200;
float nfTime = 0.005;
float nfAng = 0.008;
float ease = 0.002;
float xc,yc;

void setup(){
  size(1200, 800);
  smooth();
  background(255);
  noFill();
}

void draw(){
  float targetX=mouseX;
  float dx = targetX-xc;
  xc+=dx*ease;

  float targetY=mouseY;
  float dy = targetY-yc;
  yc+=dy*ease;

  if(abs(mouseX-xc)<maxRad && abs(mouseY-yc)<maxRad ){
    maxRad=maxRad*.994;
    if(maxRad<2) maxRad=1;
  }
  else{
    if(maxRad<200){
      maxRad+=.5;
    }
  }

  translate(xc, yc);

  beginShape();
  colorMode(HSB);
  float hue = xc/6 - 150;
  float hue2 = yc/6 - 150;
  if (hue<0) hue+=255;
  if (hue2<0) hue2+=255;
  stroke(hue, hue2, 200, 20);
  for(int i=0; i<n; i++){
    float a = map(i, 0, n, 0, TWO_PI);
    float rad = map(noise(i*nfAng, frameCount*nfTime), 0, 1, minRad, maxRad);
    float x = rad * cos(a);
    float y = rad * sin(a);
    curveVertex(x,y);
  }
  endShape(CLOSE);
}
