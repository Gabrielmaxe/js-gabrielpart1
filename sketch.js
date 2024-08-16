let xBolinha = 300
let yBolinha = 200
let diametro = 25;
let raio = diametro /2;

let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let xraquete = 5;
let yraquete = 150;
let xraqueteOponente = 585;
let yraqueteOponente = 150;
let velocidadeYOponente
let raqueteComprimento = 10;
let raqueteAltura = 90;

let colidiu = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xraquete, yraquete);
  movimentaMinhaRaquete();
  //verificaColisaoRaquete();
  mostraRaqueteOponente(xraqueteOponente, yraqueteOponente);
  movimentaRaqueteOponente();
  colisaoMinhaRaqueteBiblioteca();
  
}
  function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentaBolinha(){
    xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
  
  }

  function verificaColisaoBorda(){
    if (xBolinha + raio> width || xBolinha - raio< 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio> height || yBolinha - raio< 0){
    velocidadeYBolinha *= -1;
  }
  }
function mostraRaquete(x, y){
  rect(xraquete, yraquete, raqueteComprimento, raqueteAltura);
}

function mostraRaqueteOponente(){
  rect(xraqueteOponente, yraqueteOponente, raqueteComprimento, raqueteAltura);
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yraquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yraquete += 10;
  }
}
function verificaColisaoRaquete(){
  if (xBolinha - raio < xraquete + raqueteComprimento
     && yBolinha - raio < yraquete + raqueteAltura
     && yBolinha + raio > yraquete ){
    velocidadeXBolinha *= -1;
  }
}


 function movimentaRaqueteOponente(){
   velocidadeYOponente = yBolinha - yraqueteOponente - raqueteComprimento / 2 - 30;
   yraqueteOponente += velocidadeYOponente
   
   
 }

function colisaoMinhaRaqueteBiblioteca(){
  colidiu = collideRectCircle(xraquete, yraquete, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){ velocidadeXBolinha *= -1;
  }
  
}

function colisaoMinhaOponenteRaqueteBiblioteca(){
  colidiu = collideRectCircle(xraqueteOponente, yraqueteOponente, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){ velocidadeXBolinha *= -1;
  }
  
}