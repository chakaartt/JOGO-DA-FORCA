var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");


function desenharCorda() {
    pincel.fillStyle= "#0A3871";
    pincel.fillRect(328, 0, 4.5, 48);   
    
}

function desenharTetoForca() {
    pincel.fillStyle= "#0A3871";     
    pincel.fillRect(152, 0, 190, 4.5);  
    pincel.fill();
}

function desenharBaseForca() {
    pincel.fillStyle= "#0A3871";        
    pincel.fillRect(150, 0, 4.5, 460);    
    pincel.fill();
}

function desenharChao() {
    pincel.fillStyle= "#0A3871";       
    pincel.fillRect(0, 460, 464, 5);
    pincel.fill();
}


function desenharCabeca(){
    pincel.fillStyle= "#0A3871";     
    pincel.beginPath();
    pincel.arc(330, 90, 41.5, 0, 4 * Math.PI, true);   
    pincel.arc(330, 90, 37, 0, 4 * Math.PI, true); 
    pincel.fill('evenodd');     
}


function bracoEsquerdo(){
    pincel.fillStyle= "#0A3871";    
    pincel.fillRect(300, 150, 30, 4.5); 
    pincel.fillRect(300, 150, 4.5, 80);     
}

 
function bracoDireito(){
    pincel.fillStyle= "#0A3871";     
    pincel.fillRect(332, 150, 30, 4.5); 
    pincel.fillRect(362, 150, 4.5, 80);      
}


function desenharCorpo() {
    pincel.fillStyle= "#0A3871";    
    pincel.fillRect(330, 128, 4.5, 150);      
}


function pernaEsquerda(){
    pincel.fillStyle= "#0A3871";    
    pincel.fillRect(300, 273, 30, 4.5); 
    pincel.fillRect(300, 273, 4.5, 120);     	
}

 
function pernaDireita(){
    pincel.fillStyle= "#0A3871";     
    pincel.fillRect(332, 273, 30, 4.5); 
    pincel.fillRect(362, 273, 4.5, 120);        
}

function apagarBoneco(){
    desenharCabeca.visibility = false;
}


function desenharTracinhos(){
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.ltrokeStyle = "#0A3871";
    pincel.beginPath();
    var eixo = 400 / palavraSecreta.length;
    for(let i = 0; i < palavraSecreta.length; i++){
        pincel.moveTo(40 + (eixo * i), 600);
        pincel.lineTo(80 + (eixo * i), 600);
    } 
    pincel.stroke();
    pincel.closePath();
}

function letraCorreta(index){
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#0A3871";
    var eixo = 400 / palavraSecreta.length;
    pincel.fillText(palavraSecreta[index], 45 + (eixo * index), 590);    
    pincel.fill();
}

function letraErrada(letra, errorsLeft){
    pincel.font = "bold 40px Inter";
    pincel.lineWidth = 4.5;
    pincel.lineCap = "round";
    pincel.lineJoin = "round";
    pincel.fillStyle = "#0A3871";
    pincel.fillText(letra, 40 + (40 * (8 - errorsLeft)), 670, 40);
    pincel.fill();
}

function jogadorVence(){
    pincel.font = "bold 30px Inter";
    pincel.fillText("conseguiu salvar", 240, 440);
    pincel.fillStyle = "#0A3871";
    pincel.fill();
}

function jogadorPerde(){
    pincel.font = "bold 30px Inter";
    pincel.fillText("ih, perdeu ", 240, 440);   
    pincel.fillStyle = "#0A3871";
    pincel.fill();
}


desenharChao();
