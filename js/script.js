console.log("hello js");
console.log(document);

const student={
    name:'Hemonto',
    id:191002325,
    study:function(time){
        console.log(time,'js programming started');
    }
}
const liCollection=document.getElementsByTagName('li');
// console.log(liconection);

for (const i of liCollection) {
    console.log(i.innerText);
    
}
const allHeadings=document.getElementsByTagName('li');
for (const i of allHeadings) {
    console.log(i);
    console.log(i.innerText); 
}

const placesTitle=document.getElementById('places-title')
console.log(placesTitle);
console.log(placesTitle.innerText="my tour list");
const places=document.getElementsByClassName('important-places');
console.log(places);
console.log(places.innerText);
for (const place of places) {
    console.log(place);
    console.log(place.innerText);
    
}
const otherPlace=document.getElementById('other-place');
console.log(otherPlace);