// calling the html elements

let inputAdults = document.getElementById("adults")
let inputChild = document.getElementById("child")
let inputTime = document.getElementById("time")

// console.log(inputAdults, inputChild, inputTime)

//calling the result div and setting the function
let result = document.getElementById("result")

function calculate(){
    //console.log("Calculando ...")

    let adults = inputAdults.value
    let child = inputChild.value
    let duration = inputTime.value

    let meatTotal = meatByPerson(duration) * adults + (meatByPerson(duration) / 2 * child);
    //console.log(meatTotal);
    
    let beerTotal = beerByPerson(duration) * adults;
    //console.log(beerTotal);

    let otherDrinksTotal = otherDrinksByPerson(duration) * adults + (otherDrinksByPerson(duration) / 2 * child);
    //console.log(otherDrinksTotal);

    result.innerHTML = `<p>${meatTotal / 1000}kg de Carne`
    result.innerHTML += `<p>${Math.ceil(beerTotal / 355)} Latas de Cerveja`
    result.innerHTML += `<p>${Math.ceil(otherDrinksTotal / 2000)} Garrafas PET's de Bebidas`
}

function meatByPerson(duration){
    if(duration >= 6){
        return 650;
    } else{
        return 400;
    }
}



function beerByPerson(duration){
    if(duration >= 6){
        return 2000;
    } else{
        return 1200;
    }
}



function otherDrinksByPerson(duration){
    if(duration >= 6){
        return 1500;
    } else{
        return 1000;
    }
}
