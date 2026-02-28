//ejemplo
const nameInput = document.getElementById('nameInput');//nombre
const colorPicker = document.getElementById('colorPicker');//color
const displayname = document.getElementById('displayName');//mostrar el nombre
const banner = document.querySelector('.banner');


//tarea 5 para casa
const jobInput = document.getElementById('jobInput');
const displayJob = document.querySelector('.card p'); // Selecciona el <p> de la tarjeta
const fontPicker = document.getElementById('fontPicker');
const card = document.getElementById('profileCard');
const darkModeBtn = document.getElementById('darkModeBtn'); //modo oscuro
//actualizar el nombre a ingresar
nameInput.addEventListener('input',(e) =>{
displayname.textContent = e.target.value || "escribe tu nombre aquí"
});

//actualizar color de fondo
colorPicker.addEventListener('input',(e) =>{
banner.style.backgroundColor = e.target.value;
});

jobInput.addEventListener('input', (e) => {
 displayJob.textContent = e.target.value || "Desarrollador Web";
});

//cambio de fuente
fontPicker.addEventListener('change', (e) => {
 card.style.fontFamily = e.target.value;
});

//modo oscuro
darkModeBtn.addEventListener('click', (e) => {
card.classList.toggle('dark-mode');
document.body.classList.toggle('dark-mode');
});

