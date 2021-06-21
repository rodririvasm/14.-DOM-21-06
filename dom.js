let subtitle=document.querySelector('#subtitle');/* # por id // . por clase*/
let subtitle=document.querySelector('#parrafo');
console.log(subtitle);
console.log(subtitle.textContent);


subtitle.textContent='Nuevo valor';

subtitle.classList.add('red');
subtitle.classList.remove('red');

let animales=['perro','gato','mapache','pez'];
const list= document.querySelector('#list');

animales.forEach(function(animal){
    let item  =document.createElement('li');
    item.textContent=animal;

    list.appendChild(item);
});