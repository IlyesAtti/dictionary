let wordId = 0;
let wrds = [{ sentence : "", uniqeId: wordId }];
let hidden = false;


function searchIt() {
    let wordWalue = document.getElementById("form1").value
    let searchSentence = wrds.find((word) => word.sentence === wordWalue);  
    if (searchSentence === undefined) {
        hidden = true;
    }
    hidden = !searchSentence; 
    return(action());
}

function addWord() {
    let wordWalue = document.getElementById("form1").value;
    let wOrd = { sentence: wordWalue, uniqeId: wordId + 1 };  
    document.getElementById("addedWords").innerHTML += `
    <div class="container">
    ${wOrd.sentence}
    </div>`;  
    wrds.push(wOrd);
    ++wordId;
    document.getElementById("form1").value = "";
    return(action());
}

function action() {
    if (hidden) {
        document.getElementById('addBtn').style.display = 'block'; 
        document.getElementById('message').innerText = 'This word is NOT in the list! Du you want to add?'; 
    } else {
        document.getElementById('addBtn').style.display = 'none'; 
        document.getElementById('message').innerText = 'This word is already in the list';
    }
}