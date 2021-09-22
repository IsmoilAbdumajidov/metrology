let electronics = document.getElementById('electr');
let electrBtn = document.getElementById('electrBtn');
let mechanicBtn = document.getElementById('mechanicBtn');
let difference = document.getElementById('difference');


let kiritishlarSoni = 0;
let kiritishlarSoni2 = 0
let jamiMexanik = 0;
let jamiEkectr = 0;



electrBtn.addEventListener('click', () => {
    let inputValue = Number(electronics.value);
    kiritishlarSoni = kiritishlarSoni + 1;
    jamiEkectr = (jamiEkectr+inputValue);
    // console.log(inputValue)
    console.log(jamiEkectr)

    if (kiritishlarSoni == 5) {
        let lebel = document.getElementById('labelText')
        let electrBtn = document.getElementById('electrBtn');
        electrBtn.classList.add('disabled')
        lebel.textContent = 'Mexanika'
        let icon = document.querySelector('.fas')

        icon.classList.remove('fa-bolt');
        icon.classList.add('fa-cogs');

        let textElectr = document.getElementById('textElectr')
         textElectr.textContent = jamiEkectr/5
        
    };

    let clear = document.querySelector('.electr')

    clear.value = '';
})

mechanicBtn.addEventListener('click', () => {
    let inputValue = Number(electronics.value);
    kiritishlarSoni2 = kiritishlarSoni2 + 1;
    jamiMexanik = jamiMexanik+inputValue;
    // console.log(inputValue)
    console.log(jamiMexanik)

    if (kiritishlarSoni2 == 5) {
        let mechanicBtn = document.getElementById('mechanicBtn');
        mechanicBtn.classList.add('disabled')
        
        let textMechanic = document.getElementById('textMechanic')
        textMechanic.textContent = jamiMexanik/5

        let differ = document.getElementById('difference')
        differ.classList.remove('disabled')
        
    };

    let clear = document.querySelector('.electr')

    clear.value = '';
})

difference.addEventListener('click', ()=>{
    let textMechanic = document.getElementById('textMechanic')
    let textElectr = document.getElementById('textElectr');
    let farqi = document.getElementById('text')
    let diff = Math.abs((Number(textElectr.textContent)-Number(textMechanic.textContent)))
    farqi.textContent = diff
})






