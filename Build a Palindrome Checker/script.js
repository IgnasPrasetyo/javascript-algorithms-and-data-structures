const input = document.getElementById('text-input');
const button = document.getElementById('check-btn');
const result = document.getElementById('result');

function checker(word) {
    const newWord = word.replace(/[^a-zA-Z0-9]/g, "").trim().replace(" ", "");
    const lowercase = newWord.toLowerCase();
    const reversed = lowercase.split("").reverse().join("")
    if (lowercase === reversed) {
        result.innerHTML = `<p>${word} is a palindrome.</p>`;
    } else {
        result.innerHTML = `<p>${word} is not a palindrome.</p>`;
    }
    return;
}

function emptyOrNot() {
    const i = input.value;
    if (i !== '') {
        checker(i);
    } else {
        alert('Please input a value');
    }
}

button.addEventListener('click', emptyOrNot);