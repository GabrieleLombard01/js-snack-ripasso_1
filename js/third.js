/*
0. Prendiamo un elemento nel DOM
1. Chiedere all'utente il numero di kilometri che vuole percorrere
2. Chiedere all'utente l'età del passeggero
3. Calcolare il prezzo del biglietto e salvarlo in una variabile
4. Se l'utente ha anni da 0 a 18 (compresi), sottrarre -20% al prezzo biglietto
5. Se l'utente ha anni da 65 a max (compresi), sottrarre -40% al prezzo biglietto
6. Stampare il prezzo finale sull'elemento del DOM
*/

// Recupero l'elemento dal DOM
const domElement = document.getElementById('domElement');

// Chiedere all'utente il numero di kilometri che vuole percorrere
const UserKm = parseInt(prompt('Scegli i km che vuoi percorrere', '10', 500));
console.log(UserKm)

// Chiedere all'utente l'età del passeggero
const UserAge = parseInt(prompt('Inserisci la tua età', '18', 200));
console.log(UserAge)