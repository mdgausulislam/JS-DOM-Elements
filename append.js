console.log('append.js');
const placeList=document.getElementById('places-list');
console.log(placeList);
const li1=document.createElement('li');
li1.innerText='pahartoli bon';
placeList.appendChild(li1);




const mainContent=document.getElementById('main-content');
const addItems=document.createElement('section');
const h1=document.createElement('h1');
h1.innerText='My Food List';

addItems.appendChild(h1);
const ul=document.createElement('ul');
const li5=document.createElement('li');
li5.innerText='Byrani';
ul.appendChild(li5)
const li6=document.createElement('li');
li6.innerText='Borhani';
ul.appendChild(li6)
const li7=document.createElement('li');
li7.innerText='ice-cream';
ul.appendChild(li7);

addItems.appendChild(ul);
mainContent.appendChild(addItems);



const sectionDress=document.createElement('section');

sectionDress.innerHTML=`
<h1>My dress Section </h1>
<ul>
<li>T-shirt</li>
<li> Shirt</li>
<li>Payjama</li>
</ul>
`
mainContent.appendChild(sectionDress)