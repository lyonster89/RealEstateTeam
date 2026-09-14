const menuButton=document.querySelector('.menu-button');
const nav=document.querySelector('#site-nav');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));nav.classList.toggle('open',!open)});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const tabs=[document.querySelector('#investor-tab'),document.querySelector('#partner-tab')];
const panels=[document.querySelector('#investor-panel'),document.querySelector('#partner-panel')];
tabs.forEach((tab,index)=>tab.addEventListener('click',()=>{tabs.forEach((item,i)=>item.setAttribute('aria-selected',String(i===index)));panels.forEach((panel,i)=>panel.hidden=i!==index)}));
document.querySelectorAll('.bio-toggle').forEach(button=>button.addEventListener('click',()=>{const bio=button.nextElementSibling;const open=bio.classList.toggle('open');button.setAttribute('aria-expanded',String(open));button.textContent=open?'Close bio':'Read sample bio'}));
document.querySelector('#year').textContent=new Date().getFullYear();
