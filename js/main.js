
var numbers = [1,2,3,4,5] 
var ciclo = 0
    while (ciclo < numbers.length){
        console.log(numbers[ciclo])
        ciclo++
    }



/*Verificar que la palabra tiene al menos 3 vocales*/
var word = "League"
var ciclos = 0
    for (ciclo = 0; ciclo< word.length; ciclo++){
        if (word[ciclo] === "a" || 
        word[ciclo] === "e" || 
        word[ciclo] === "i" || 
        word[ciclo] === "o" ||  
        word[ciclo] === "u") {
        ciclos++
        }
    }
            if(ciclos >=3) { 
                console.log(ciclos + " vocales")
    
            }
                    else {
                        console.log("Al menos deben ser 3 caracteres")
                    }