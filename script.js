


const text = document.getElementById("aya");
const surah = document.getElementById("surah");
const ayaNumber = document.getElementById("number");
const btn = document.getElementById("btn");


function generate(){
    let ayats = Math.floor(Math.random()*6236) + 1;
    const url = `https://api.alquran.cloud/v1/ayah/${ayats}`;

    // Remove animation class before fetch
    text.classList.remove('ayah-fade');
    surah.classList.remove('ayah-fade');
    ayaNumber.classList.remove('ayah-fade');

    fetch(url)
    .then(response =>response.json())
    .then(json => {
        text.innerHTML = `${json.data.text}`;
        surah.innerHTML = `${json.data.surah.name}`;
        ayaNumber.innerHTML = `Ayah number: ${json.data.numberInSurah}`;

        // Trigger reflow then add fade-in animation
        void text.offsetWidth;
        text.classList.add('ayah-fade');
        surah.classList.add('ayah-fade');
        ayaNumber.classList.add('ayah-fade');
    });
}

btn.addEventListener('click' , generate);

document.addEventListener('keypress', function(event) {
    if(event.key === 'Enter'){
        generate();
    }
});





