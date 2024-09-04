
/* Write a javascript program that converts temperature of celcius to fahrenheit and fahrenheit to celcius.*/


function CelciusToFahrenheit(cels){
    return ((cels * 9) / 5) + 32;
}
function FahrenheitToCelcius(fah){
    return ((fah - 32) * 5) / 9;
}


function convertCelciusToFahrenheit(){
    let celsInput = parseFloat(prompt("Place the Celcius to Convert into Fahrenheit"));

    if(!isNaN(celsInput)){
        let fahrenheitOutput = CelciusToFahrenheit(celsInput);
        alert(`The Temperature in Fahrenheit is : ${fahrenheitOutput.toFixed(2)} .`); // tried using backticks and method toFixed() to fixed 2 decimal places.
    }
}

function convertFahrenheitToCelcius(){
    let fahInput = parseFloat(prompt("Place the Fahrenheit to Convert into Celcius"));

    if(!isNaN(fahInput)){
        let celciusOutput = FahrenheitToCelcius(fahInput);
        alert(`The Temperature in Celcius is : ${celciusOutput.toFixed(2)} .`);
    }

}








