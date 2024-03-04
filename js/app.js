// input km ed age
let km = parseInt(prompt('Inserisci il numero di km'));
let age = parseInt(prompt('Inserisci l\'age del passeggero'));

// check dati inseriti
if (/^([1-9]\d*)$/.test(km) && /^([1-9]\d*)$/.test(age))  {
    console.log('La lunghezza del viaggio è di ' + km + ' km');
    // calcolo costo base
    let costoAlKilometro = 0.21;
    let costo = costoAlKilometro * km;

    // calcolo sconto
    if (age < 18) {
        costo = costo * 0.8;
        console.log('Lo sconto è pari al 20% del prezzo totale'); 
    } else if (age > 64) { 
        costo = costo * 0.6;
        console.log('Lo sconto è pari al 40% del prezzo totale'); 
    }

    // stampa prezzo
    console.log('Il costo del biglietto è di ' + costo.toFixed(2) + ' eur'); 
} else {
    console.log('Formato dati non valido');
}



