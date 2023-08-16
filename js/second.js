/*
- CHIEDO l'età
- CHIEDO un'altra età
- CALCOLO il maggiore
- COMUNICO chi è il più grade
*/

// Recupero l'elemento dal DOM
const domElement = document.getElementById('domElement');

// Chiedo l'età all'utente
const firstAge = prompt('Inserire la prima età da calcolare');

// Chiedo la seconda età all'utente 
const secondAge = prompt('Inserire la seconda età da calcolare');
 
// Calcolo il maggiore
if (firstAge > secondAge) {
    domElement.innerText = `E' maggiore la prima età inserita`
    }
else {
    domElement.innerText = `E' maggiore la seconda età inserita`
}