const nameInput = document.querySelector("#input-name");
const buttonInput = document.querySelector("#input-generate");
const placeholder = document.querySelector("#placeholder")
const nameOutput = document.querySelector("#output-name");
const imgOutput = document.querySelector("#output-img");
const rarityOutput = document.querySelector("#output-rarity");
const logo = document.querySelector("#header-logo");

const imgLinks = [
    "https://static.wikia.nocookie.net/the-streets-roblox/images/9/9e/Amogus.jpg/revision/latest?cb=20210409100921", //Amogus
    "https://media.wired.com/photos/620581d7c228dc232641feaa/4:3/w_2132,h_1599,c_limit/Games-Innersloth-Among-Us-Key-Art.jpg", //Among us and the group
    "https://cdn.vox-cdn.com/thumbor/XhTJC44kN4rZ6QxsOHjdDH6Er8Q=/0x0:2429x1633/1200x800/filters:focal(1021x623:1409x1011)/cdn.vox-cdn.com/uploads/chorus_image/image/69863777/among_us_costumes.0.png", // Costumes
    "https://i.pinimg.com/originals/cf/d1/15/cfd1157db86c3a5342e93aa7307932bf.png", // Among us Drip with gun
    "https://static.wikia.nocookie.net/220fb4f7-3418-4007-a4d5-4accc870760c", // Jerma Sus
    "https://c.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif", //  Among us Twerk
    "https://i.redd.it/lpf1w8gp1jk71.gif" // Among us FNF
];
const suffix = "mogus";
const rarities = ["Certified Sus", "Drip", "Amogusus", "Sussy Baka", "Chadmate", "Totally vented", "Caught in 4K"]
const rarityStyles = [
    "common",
    "cartoony",
    "drip",
    "hipster",
    "sign",
    "waver",
    "innovate"
];

const vowels = ["a", "e", "i", "o", "u"];
const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbers = /[1234567890]/;

function arrRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}


let newSuffix = suffix;
let newImg = imgOutput;
let newRarity = rarityOutput;


// Event listener to button
buttonInput.addEventListener("click", () => {
    imgOutput.style.display = "block";
    placeholder.style.display = "none";

    for (const vowel of vowels) {
        if (nameInput.value[nameInput.value.length-1] === vowel) {
            nameOutput.textContent = nameInput.value + suffix;
            break; // have to add break to not show undefined
        } else if (nameInput.value === "69") {
            nameOutput.textContent = `NOICE`;
        } else if (nameInput.value.length >= 16) {
            nameOutput.textContent = "Your name is too long thus ejected";
        } else if (numbers.test(nameInput.value) === true) {
            nameOutput.textContent = `${nameInput.value} have numbers and thus ejected`;
        } else if (specialChar.test(nameInput.value) === true) {
            nameOutput.textContent = `${nameInput.value} have special characters and thus ejected`;
        } else if (nameInput.value === "") {
            nameOutput.textContent = `Your input have no characters and thus ejected`;
        } else {
            const modName = nameInput.value.slice(0, nameInput.value.length-1);
            nameOutput.textContent = modName + suffix;
        }
    }

    if (nameOutput.textContent.includes("ejected") === true) {
        imgOutput.src = "https://static.wikia.nocookie.net/among-us-wiki/images/2/27/Space.png/revision/latest?cb=20201014232555";
    } else {
        imgOutput.src = arrRandom(imgLinks);
    }

    if (nameOutput.textContent.includes("ejected") === true) {
        rarityOutput.textContent = "EJECTED!";
        rarityOutput.className = "drip";
    } else {
        rarityOutput.textContent = arrRandom(rarities);
        const rarityClass = arrRandom(rarityStyles); 
        rarityOutput.className = rarityClass;
    }

});