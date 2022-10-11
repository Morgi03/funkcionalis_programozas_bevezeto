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


//  = 

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

