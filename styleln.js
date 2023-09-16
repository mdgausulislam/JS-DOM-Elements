const section=document.querySelectorAll('section');
console.log(section);

for (const sections of section) {
console.log(sections);
sections.style.border='2px solid steelblue';
sections.style.marginBottom='5px';
 sections.style.borderRadius='15px';
 sections.style.paddingLeft='7px';
 sections.style.backgroundColor='lightgray';
}
// const place=document.getElementById('places-container');
// place.style.backgroundColor='yellow';

const place1=document.getElementById('places-container');
place1.classList.add('yellow-bg');
place1.classList.remove('large-text')

// const placeUl=getElementById('places-container');
const li=document.createElement('li');
li.innerText="brand new place to go";
console.log(li);
