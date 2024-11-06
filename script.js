// Taulukko kaverien nimien tallentamiseen
let friends = [];

// Versio 1: Kysy kymmenen kaverin nimet ja lisää ne listaan
function addTenFriends() {
    friends = []; // Tyhjennä lista ennen lisäystä
    for (let i = 1; i <= 10; i++) {
        let name = prompt(`Anna kaverin ${i} nimi:`);
        
        if (name === null) { 
            // Käyttäjä painoi "Peruuta", lopetetaan nimien kysyminen
            alert("Nimien syöttäminen keskeytettiin.");
            break;
        }

        if (name.trim() === "") {
            // Jos syöte on tyhjä, näytetään virheilmoitus ja vähennetään i, jotta sama kaveri kysytään uudestaan
            alert("Hei, unohdit kirjoittaa nimen?");
            i--; 
        } else {
            friends.push(name);
        }
    }
    displayFriendsVersion1();
    showVersion2();
}

// Näyttää ensimmäisen version listan
function displayFriendsVersion1() {
    const friendList1 = document.getElementById("friendList1");
    friendList1.innerHTML = friends.map(friend => `<li>${friend}</li>`).join('');
}

// Näyttää toisen version ja sen toiminnallisuudet
function showVersion2() {
    document.getElementById("version1").style.display = "none";
    document.getElementById("version2").style.display = "block";
    displayFriendsVersion2();
}

// Versio 2: Lisää, poista ja järjestä kaverit dynaamisesti
function addFriend() {
    const newFriend = document.getElementById("newFriend").value.trim();
    if (newFriend) {
        friends.push(newFriend);
        document.getElementById("newFriend").value = '';
        displayFriendsVersion2();
    } else {
        alert("Hei, unohdit kirjoittaa nimen?");
    }
}

function displayFriendsVersion2() {
    const friendList2 = document.getElementById("friendList2");
    friendList2.innerHTML = friends.map((friend, index) =>
        `<li>${friend} <button onclick="removeFriend(${index})">Poista</button></li>`
    ).join('');
}

function removeFriend(index) {
    friends.splice(index, 1);
    displayFriendsVersion2();
}

function sortFriends() {
    friends.sort();
    displayFriendsVersion2();
}
