/*
- Recupero l'elemento dal DOM
- Ottenere il Nome
- Ottenere il Cognome
- Ottenere il Colore preferito
- Generare password
- Stampo la password in pagina
*/ 

// Recupero l'elemento dal DOM
const domElement = document.getElementById('domElement');

// Ottenere il Nome
const name = prompt('Inserisci il tuo nome', 'Gabriele');

// Ottenere il Cognome
const surname = prompt('Inserisci il tuo cognome', 'Lombardo');

// Ottenere il Colore preferito
const color = prompt('Inserisci il tuo colore preferito', 'verde');

// Generare password
const password = name + surname + color;


//Stampo la password in pagina
console.log(password)