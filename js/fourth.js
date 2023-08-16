//Recupero gli elementi
const input = document.querySelector('input');
const button = document.querySelector('#button');
const paragraph = document.querySelector('#name-placeholder');

//Aspetto il click sul bottone
button.addEventListener('click', function(){   
	const userName = input.value;

    if (userName) {
        paragraph.innerText= 'il nome è: ' + userName
    }

});