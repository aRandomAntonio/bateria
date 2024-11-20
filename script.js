let audio = 0;
let divAudio;
const input = document.getElementById("input_sound");
const form = document.getElementById("my_form");

const validLetters = ["a", "c", "d", "e", "q", 's', 'w', 'x', 'z'];

input.addEventListener("keyup", (event) => {
    getAudioId(event.code);

    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        playAudio();
        setTimeout(() =>{
            divAudio.style.border = "2px solid #FFF"
            divAudio.style.color = "#DDD";
        }, 200)
    }
});

function getAudioId(sound) {
    if(divAudio){
        divAudio.style.border = "2px solid #FFF"
         divAudio.style.color = "#DDD";
    }
    audio = document.querySelector(`#s_${sound}`);
    divAudio = document.querySelector(`#audio${sound.replace("Key", "")}`);
    return audio;
}
function playAudio() {
    audio.play();
    divAudio.style.border = "2px solid yellow"
    divAudio.style.color = "yellow"
}

form.addEventListener("submit", (event) => {
    let delay = 0
    event.preventDefault();

    let inputValue = input.value;
    input.value = "";

    for (let i = 0; i < inputValue.length; i++) {
        let char = inputValue[i].toLowerCase();
        if (validLetters.includes(char)) {
            delay++
            setTimeout(() => {
                getAudioId(`Key${char.toUpperCase()}`);
                if (audio) {
                    audio.pause();
                    audio.currentTime = 0;
                    playAudio();
                    setTimeout(() =>{
                        divAudio.style.border = "2px solid #FFF"
                        divAudio.style.color = "#DDD";
                    }, 200)
                }
            }, delay * 250);
        } else {
            inputValue = inputValue.slice(i, inputValue.length);
            i = 0;
        }
    }
});