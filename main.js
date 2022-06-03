const nameInput = document.querySelector("#input-name");
const buttonInput = document.querySelector("#input-button");
const nameOutput = document.querySelector("#output-name");
const imgOutput = document.querySelector("#output-img");
const rarityOutput = document.querySelector("#output-rarity");
const imageLinks = [
    "https://static.wikia.nocookie.net/the-streets-roblox/images/9/9e/Amogus.jpg/revision/latest?cb=20210409100921", //Amogus
    "https://media.wired.com/photos/620581d7c228dc232641feaa/4:3/w_2132,h_1599,c_limit/Games-Innersloth-Among-Us-Key-Art.jpg", //Among us and the group
    "https://cdn.vox-cdn.com/thumbor/XhTJC44kN4rZ6QxsOHjdDH6Er8Q=/0x0:2429x1633/1200x800/filters:focal(1021x623:1409x1011)/cdn.vox-cdn.com/uploads/chorus_image/image/69863777/among_us_costumes.0.png", // Costumes
    "https://img2.cgtrader.com/items/2686969/3507141ec6/large/among-us-figure-3d-model-obj-ztl.jpg", // Among us Prime
    "https://static.wikia.nocookie.net/220fb4f7-3418-4007-a4d5-4accc870760c", // Jerma Sus
    "https://c.tenor.com/gQV5VzHLWQIAAAAd/among-us-sus.gif", //  Among us Drip
    "https://i.redd.it/lpf1w8gp1jk71.gif" // Among us FNF
];
const suffix = "mogus";
const rarities = ["Certified Sus", "Drip", "Amogusus", "Sussy Baka", "Chadmate", "Totally vented", "Caught in 4K"]
const vowels = ["a", "e", "i", "o", "u"];
const specialChar = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numbers = /[1234567890]/;

function arrRandom(array) {
    return array[Math.floor(Math.random() * array.length)];
}

let newSuffix = suffix;
let newImg = imgOutput;
let newRarity = rarityOutput;

buttonInput.addEventListener("click", () => {
    for (const vowel of vowels) {
        if (nameInput.value[nameInput.value.length-1] === vowel) {
            nameOutput.textContent = nameInput.value + suffix;
            break; // have to add break to not show undefined
        } else if (nameInput.value === "69") {
            nameOutput.textContent = `NOICE`;
        } else if (numbers.test(nameInput.value) === true) {
            nameOutput.textContent = `${nameInput.value} have numbers and thus rejected`;
        } else if (specialChar.test(nameInput.value) === true) {
            nameOutput.textContent = `${nameInput.value} have special characters and thus rejected`;
        } else if (nameInput.value === "") {
            nameOutput.textContent = `Your input have no characters and thus rejected`;
        } else {
            const modName = nameInput.value.slice(0, nameInput.value.length-1);
            nameOutput.textContent = modName + suffix;
        }
    }
});