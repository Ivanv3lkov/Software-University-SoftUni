function trainingLab(input) {
    let h = Number(input.shift());
    let w = Number(input.shift());
    
    let r = h * 100 / 120; 
    let s = (w * 100 - 100) / 70;  
    let f = Math.floor(r); 
    let t = Math.floor(s); 

    console.log((t * f) - 3);
}

trainingLab(['8.4', '5.2']);