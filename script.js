//ksekinaei na metraei xrono
let start = new Date().getTime();

//H function gia to tyxaio xroma
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//H function gia ta koutia
function makeShapeAppear() {
    
    //Oi metablhtes gia ta xrwmata
    let top = Math.random() * 400;
    let left = Math.random() * 400;
    let width = (Math.random() * 300) +100;
    
    //50% ginetai kuklos to sxhma
    if(Math.random()>0.5){
        document.getElementById("shape").style.borderRadius = "50%";
    }else{
        document.getElementById("shape").style.borderRadius = "0";
    }

    //Allagh xromatos, sxhmatos kai theshs
    document.getElementById("shape").style.top = top + "px";
    document.getElementById("shape").style.left = left + "px";
    document.getElementById("shape").style.width = width + "px";
    document.getElementById("shape").style.height = width + "px";
    document.getElementById("shape").style.backgroundColor = getRandomColor();
    document.getElementById("shape").style.display = "block";

    start = new Date().getTime();
}

function apperAfterDelay(){
    setTimeout(makeShapeAppear, Math.random() + 2000);
}



apperAfterDelay();

document.getElementById("shape").onclick = function() {
   
    let end = new Date().getTime();
    let timeTaken = (end - start) / 1000;
    

    document.getElementById("timeTaken").innerHTML = timeTaken + " Seconds";
    document.getElementById("shape").style.display = "none";
    

    apperAfterDelay();
    
}