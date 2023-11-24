
const characters = {
    cLetters: ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
    sLetters: ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    num: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    sChar: ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]
};

const features = {
    concatArr : [...characters.cLetters, ...characters.sLetters, ...characters.num, ...characters.sChar],
    isPWGenerated : false,
    maxCharacters : 15,
    firstPanel : "",
    secondPanel : "",
    isPWDisplayed : false,
}

const pwscr1EL = document.getElementById("pw-scr1");
const pwscr2EL = document.getElementById("pw-scr2");
const notifEl = document.getElementById("notif");
const capEl = document.getElementById("cap-el");
const charInputEl = document.getElementById("char-input");

function maxCharacters(){
    let newInput = charInputEl.value;
    features.maxCharacters = newInput;
    features.isPWDisplayed = false
    remove()
}

function randomizer(){
    let randomArr = Math.floor(Math.random() *features.concatArr.length);
    return features.concatArr[randomArr];
}

function generatePassword() {
    if (features.isPWGenerated === false) {
        for(let i = 0; i < features.maxCharacters; i++) {
            pwscr1EL.textContent += randomizer()
            features.firstPanel = pwscr1EL.textContent
            pwscr2EL.textContent += randomizer()
            features.secondPanel = pwscr2EL.textContent
            features.isPWGenerated = true;
            features.isPWDisplayed = true;
        }
    } else {
        return features.isPWGenerated;
    }
}

function remove(){
    pwscr1EL.textContent = "";
    pwscr2EL.textContent = "";
    notifEl.textContent = "";
    features.isPWGenerated = false;
    features.isPWDisplayed = false
}

function clipBoard(panelNum)
{
    function hideElement(){
        notifEl.textContent='';
    }

    if (features.isPWDisplayed) {
    navigator.clipboard.writeText(panelNum)
            .then(function () {
                notifEl.textContent='Password successfully copied to clipboard.';
            })
            .catch(function (err) {
                console.error('Unable to copy text to clipboard.', err);
            })
    setTimeout(hideElement, 5000);
    } else {
       return features.isPWDisplayed = false;
    }
}
