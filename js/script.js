// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// creo oggetto con proprietà: nome, cognome, proprietà
var studente = {
    nome: 'Paperino',
    cognome: 'Paolino',
    eta: 30
};

// stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var k in studente){
    // console.log(studente[k]);
    document.getElementById('studente').innerHTML += studente[k] + ' ';
}; 

// Creare un array di oggetti di studenti.
arrayStudenti = [studente];

 studente = {
    nome: 'Peperone',
    cognome: 'Paperon De',
    eta: 80
};
arrayStudenti.push(studente);

studente = {
    nome: 'Pippo',
    cognome: 'Nonricordo',
    eta: 35
};
arrayStudenti.push(studente);

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (var i=0; i<arrayStudenti.length; i++){
    console.log(arrayStudenti[i].nome);
    console.log(arrayStudenti[i].cognome);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

studente = {
    nome: prompt('Inserisci nome'),
    cognome: prompt('Inserisci cognome'),
    eta: parseInt(prompt('Inserisci età'))
};
arrayStudenti.push(studente);

console.log(arrayStudenti);