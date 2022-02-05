const string = `Hello there!`
console.log(string);

const twoString = string + ` this is a different variable`;
console.log(twoString);

const firstString = `Hello, `;
const secondString = `how are you?`;
const finalString = `${firstString} ${secondString}`;
console.log(finalString);

const button = document.querySelector('button');
function santaQuestion() {
    const gift = prompt('Ce ai vrea sa iti aduca mosul?');
    alert(`${gift}? Atata poti? Ce pula mea e asta..`);

}

button.addEventListener('click', santaQuestion);

function preferedThing(){
    const thing = prompt(`Ce iti place tie cel mai mult?`)
    alert(`${thing}? Serios coaie? Ce plm....`)
}

button.addEventListener('click', preferedThing);

function result(){
    const result = `Din ce mi-ai zis tu mie pe aici rezulta ca esti vai de pla ta, mai bine o lasam asa da-o drq...`
    alert(result);
}

button.addEventListener('click', result);

const nrString = `123`;
const nrNum = Number(nrString);
console.log(nrNum + ` is a ` + typeof nrNum);
console.log(typeof nrNum);



