function setup() {
    createCanvas(400, 400);
  }
  
  
  
  
  function draw() {
    background("white");
    fill("red");
    textSize(64);
    textAlign(CENTER, CENTER);
    let maximo = width;
    let minimo = 0;
    let palavra = "Beleza";
    let quantidade = map(mouseX, 0, width, 1, palavra.length);
    let parcial = palavra.substring(0, quantidade);
    text(parcial, 200, 200);
    
    
    /* if (mouseX < 50){
      let palavra = "B";
      text(palavra, 200, 200);
    } else if(mouseX < 100){
      let palavra = "Be";
      text(palavra, 200, 200);
    } else if(mouseX < 150){
      let palavra = "Bel";
      text(palavra, 200, 200);
    } else if(mouseX < 200){
      let palavra = "Bele";
      text(palavra, 200, 200);
    } else if(mouseX < 250){
      let palavra = "Belez";
      text(palavra, 200, 200);
    } else if(mouseX < 300){
      let palavra = "Beleza";
      text(palavra, 200, 200);
    } */
  }