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