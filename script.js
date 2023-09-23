let wordId = 0;
let words = [{ sentence : "", uniqeId: wordId }];

function searchWord() {
    let wordWalue = document.getElementById("form1").value
    let searchSentence = words.find((word) => word.sentence === wordWalue);  
    if (searchSentence === undefined) {
        document.getElementById('message').innerText = 'This word is NOT in the list! Du you want to add?'; 
    } else {
        document.getElementById('message').innerText = 'This word is already in the list';
    }
}

function addWord() {
    let wordWalue = document.getElementById("form1").value;
    let newWord = { sentence: wordWalue, uniqeId: wordId + 1 };  
    document.getElementById("addedWords").innerHTML += `
    <div class="container">
        ${newWord.sentence}
    </div>`;  
    words.push(newWord);
    ++wordId;
    document.getElementById("form1").value = "";
}
