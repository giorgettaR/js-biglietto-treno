// input km ed età
let kilometri = parseInt(prompt('Inserisci il numero di kilometri')); //number
let età = parseInt(prompt('Inserisci l\'età del passeggero')); //number

// check dati inseriti
if (/^([1-9]\d*)$/.test(kilometri) && /^([1-9]\d*)$/.test(età))  {
    console.log('La lunghezza del viaggio è di ' + kilometri + ' kilometri');
    // calcolo costo base
    let costoAlKilometro = 0.21; //number
    let costo = costoAlKilometro * kilometri; //number

    // calcolo sconto
    if (età < 18) {
        costo = costo * 0.8; //number
        console.log('Lo sconto è pari al 20% del prezzo totale'); 
    } else if (età > 64) { 
        costo = costo * 0.6; //number
        console.log('Lo sconto è pari al 40% del prezzo totale'); 
    }

    // formattazione prezzo
    costo = Math.round(costo * 100) / 100; //number

    // stampa prezzo
    console.log('Il costo del biglietto è di ' + costo + ' eur'); 
} else {
    console.log('Formato dati non valido');
}



