function fvNeve(param1, param2){

}

let masikFv = function(param1, param2){
    console.log(param1);
}

/*
document.addEventListener('DOMContentLoaded',  function (){
    console.log('Page Loaded');

    document.getElementById('szinezes').addEventListener('click', function () {
        document.body.style.backgroundColor = 'lightblue';
    });
});
*/




// rendezés a '>' -k  megváltoztatása esetén csökkenő osrrend
let t = [4, 78, 715, -99];
/* t.sort((a, b) => {
    if(a < b){
     return -1;
    } else if(a > b){
        return 1;
    }else{
        return 0;
    }
    });*/


    //  = 
    
    t.sort((a, b) => {return a - b});
    
    console.log(t);
    


    // új tömbbe válogat ki
    console.log(t.filter((e) => { return e > 0}));
    // =   opcinoális 1 paraméter esetén:
    console.log(t.filter(e => e > 0));

    //abszolutertek> 50
    
    console.log(t.filter(e => Math.abs(e) > 50));

    t = t.map(e => e*e);
    console.log(t);




    t = t.map(e => e.toFixed(2));
    console.log(t);




    t.forEach((e, i) => {
        console.log(i, e);
    });




    

document.addEventListener('DOMContentLoaded', () => {
    console.log('Page Loaded');
    let idozito;
    // Closure
    document.getElementById('szinezes').addEventListener('click', () => {
        document.body.style.backgroundColor = 'lightblue';
        
        setTimeout(() => {
            document.body.style.backgroundColor = 'white';
        }, 2000);
        
        if(idozito !== undefined){
            console.log('Cleating timer', idozito)
            clearInterval(idozito);
        }
        
        idozito = setInterval(()  => {
        console.log(document.body.style.backgroundColor);
        }, 1000);
    });
});

